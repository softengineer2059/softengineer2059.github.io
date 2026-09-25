// Инициализация MAX WebApp
const MAX = window.Max || null;
if (MAX && MAX.WebApp) {
    MAX.WebApp.ready();
    MAX.WebApp.expand();
    // Опционально: подписка на кнопку "назад" в MAX
    if (MAX.WebApp.BackButton) {
        MAX.WebApp.BackButton.onClick(() => goBack());
    }
}

// === Роутинг ===
const pages = {
    mainMenu:     { el: document.getElementById('mainMenu'),     title: 'Администрация' },
    adminPage:    { el: document.getElementById('adminPage'),    title: 'Администрация' },
    villagesPage: { el: document.getElementById('villagesPage'), title: 'Сельские поселения' },
    schoolsPage:  { el: document.getElementById('schoolsPage'),  title: 'Школы района' },
    linksPage:    { el: document.getElementById('linksPage'),    title: 'Полезные ссылки' }
};

let history = ['mainMenu'];

function showPage(id, pushHistory = true) {
    // Скрываем все
    Object.values(pages).forEach(p => p.el.classList.remove('active'));
    // Показываем нужную
    if (!pages[id]) return;
    pages[id].el.classList.add('active');
    document.getElementById('pageTitle').textContent = pages[id].title;

    // Кнопка "Назад"
    const backBtn = document.getElementById('backBtn');
    if (id === 'mainMenu') {
        backBtn.style.display = 'none';
        if (MAX?.WebApp?.BackButton) MAX.WebApp.BackButton.hide();
    } else {
        backBtn.style.display = 'flex';
        if (MAX?.WebApp?.BackButton) MAX.WebApp.BackButton.show();
    }

    // Скролл вверх
    window.scrollTo({ top: 0 });

    // История
    if (pushHistory && history[history.length - 1] !== id) {
        history.push(id);
    }
}

function goBack() {
    if (history.length > 1) {
        history.pop();
        showPage(history[history.length - 1], false);
    } else {
        showPage('mainMenu', false);
    }
}

document.getElementById('backBtn').addEventListener('click', goBack);

// === Главное меню: клики ===
document.querySelectorAll('.menu-card').forEach(btn => {
    btn.addEventListener('click', () => {
        const route = btn.dataset.route;
        const map = {
            admin:    'adminPage',
            villages: 'villagesPage',
            schools:  'schoolsPage',
            links:    'linksPage'
        };
        if (map[route]) showPage(map[route]);
    });
});

// === Заполнение данных ===
function initData() {
    // Соцсети администрации
    document.getElementById('tgLink').href = DB.adminContacts.telegram;
    document.getElementById('vkLink').href = DB.adminContacts.vk;
    document.getElementById('siteLink').href = DB.adminContacts.site;

    // Сельские поселения
    const villagesList = document.getElementById('villagesList');
    villagesList.innerHTML = '';
    DB.villages.forEach(v => {
        const a = document.createElement('a');
        a.className = 'card link-card';
        a.href = v.site;
        a.target = '_blank';
        a.innerHTML = `<span>🏘</span><div><strong>${v.name}</strong></div>`;
        villagesList.appendChild(a);
    });

    // Школы
    const schoolsList = document.getElementById('schoolsList');
    schoolsList.innerHTML = '';
    DB.schools.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'card';
        btn.innerHTML = `<span>🏫</span><div><strong>${s.name}</strong><small>Нажмите для контактов</small></div>`;
        btn.addEventListener('click', () => openSchoolModal(s));
        schoolsList.appendChild(btn);
    });
}

// === Модальное окно ===
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(html) {
    modalBody.innerHTML = html;
    modal.classList.add('active');
}
function closeModal() {
    modal.classList.remove('active');
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// === Раздел "Администрация": чипы ===
document.querySelectorAll('.chip[data-admin]').forEach(chip => {
    chip.addEventListener('click', () => {
        const type = chip.dataset.admin;
        let html = '';

        if (type === 'address') {
            html = `<h3>📍 Адрес</h3><p>${DB.adminContacts.address}</p>`;
        } else if (type === 'phone') {
            html = `<h3>📞 Контакты</h3>
                <p>📞 Приемная: ${DB.adminContacts.phone1}</p>
                <p>📞 Телефон доверия: ${DB.adminContacts.phone2}</p>
                <p>📧 Email: <a href="mailto:${DB.adminContacts.email}">${DB.adminContacts.email}</a></p>`;
        } else if (type === 'schedule') {
            html = `<h3>🕐 График работы</h3><p>${DB.adminContacts.schedule}</p>`;
        }

        openModal(html);
    });
});

// === Прием граждан ===
document.getElementById('receptionBtn').addEventListener('click', () => {
    let html = `<h3>👥 Личный прием граждан</h3>`;
    DB.receptionInfo.forEach(c => {
        html += `
            <div class="contact-block">
                <div class="contact-name">👤 ${c.name}</div>
                <div class="contact-row"><b>Должность:</b> ${c.job_title}</div>
                <div class="contact-row"><b>Телефон:</b> ${c.phone}</div>
                <div class="contact-row"><b>Email:</b> ${c.email}</div>
                <div class="contact-row"><b>Режим работы:</b> ${c.description}</div>
            </div>`;
    });
    openModal(html);
});

// === Модалка школы ===
function openSchoolModal(school) {
    const html = `
        <h3>🏫 ${school.name}</h3>
        <div class="school-links">
            <a href="${school.site}" target="_blank">🌐 Официальный сайт</a>
            <a href="${school.vk}" target="_blank">💙 ВКонтакте</a>
            <a href="${school.max}" target="_blank">⚡ MAX</a>
        </div>`;
    openModal(html);
}

// === Инициализация ===
initData();
showPage('mainMenu', false);

// Отправляем событие в MAX, что приложение готово
if (MAX?.WebApp) {
    MAX.WebApp.ready();
}