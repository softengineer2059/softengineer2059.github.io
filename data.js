// Данные, аналогичные результатам запросов из вашей БД
const DB = {
    // get_contacts() -> admin_contacts
    adminContacts: {
        address: "368730, Республика Дагестан, Ахтынский район, с. Ахты, ул. Гаджи Ахтынского, д.3",
        phone1: "+7 (8722) 55-75-97",
        phone2: "+7 (8722) 55-75-98",
        email: "ahtirayon@e-dag.ru",
        schedule: "График работы: 8:00 - 17:00, обед 12:00 - 13:00",
        telegram: "https://t.me/pressa_akhty",
        vk: "https://vk.com/akhtcakh",
        site: "https://akhtymr.ru/"
    },

    // get_reception_info() -> reception_info
    receptionInfo: [
        {
            name: "Палчаев Абдул-Керим Нажмудинович",
            job_title: "Глава района",
            phone: "+7(8722) 55-75-97",
            email: "ahtirayon@e-dag.ru",
            description: "Приемные дни ежедневно кроме понедельника с 10:00 до 17:00 часов. Прием участников СВО и членов их семей каждый понедельник c 10:00 до 17:00"
        },
        {
            name: "Ахмедова Фатима Агакишиевна",
            job_title: "заместитель главы по развитию экономики и налоговой базы",
            phone: "+7(8722) 55-75-97",
            email: "ahtirayon@e-dag.ru",
            description: "Приемные дни и часы: вторник, пятница с 14:00 до 17:00"
        },
        {
            name: "Гамзаев Роберт Гамзаевич",
            job_title: "заместитель главы по защите личности и мобилизационной работе",
            phone: "+7(8722) 55-75-97",
            email: "ahtirayon@e-dag.ru",
            description: "Приемные дни и часы: ежедневно с 14:00 до 17:00"
        }
    ],

    // get_villages_contacts() -> villages_contact
    villages: [
        { name: "Гдым", site: "https://gdym-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Джаба", site: "https://dzhaba-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Зрых", site: "https://zryx-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Кака", site: "https://kaka-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Калук", site: "https://kaluk-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Луткун", site: "https://lutkunskij-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Смугул", site: "https://smugul-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Ухул", site: "https://uxul-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Фий", site: "https://fijskaya-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Хнов", site: "https://xnov-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Хрюг", site: "https://xryug-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Ялак", site: "https://yalak-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
        { name: "Ахты", site: "https://axty-r82.gosweb.gosuslugi.ru/glavnoe/kontakty/" },
    ],

    // get_school_contacts() -> school_contacts
    schools: [
        {
            name: "Ахтынская СОШ №1",
            site: "https://achtusoch1.gosuslugi.ru/",
            vk: "https://vk.ru/club205505665",
            max: "https://max.ru/id504006971_gos"
        },
        {
            name: "Ахтынская СОШ №2",
            site: "https://sh-emirova-axty-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205505694",
            max: "https://max.ru/id504006724_gos"
        },
        {
            name: "Ахтынская СОШ №3",
            site: "https://sh-axtynskaya3-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.ru/club223157816",
            max: "https://max.ru/id504009605_gos"
        },
        {
            name: "Хрюгская СОШ",
            site: "https://chrug-school.gosuslugi.ru/",
            vk: "https://vk.com/club205530706",
            max: "https://max.ru/id504006210_gos"
        },
        {
            name: "Луткунская СОШ",
            site: "https://sh-lutkunskaya-slutkun-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205530150",
            max: "https://max.ru/id504006996_gos"
        },
        {
            name: "Зрыхская СОШ",
            site: "https://sh-zryxskaya--szryx-r82.gosweb.gosuslugi.ru/roditelyam-i-uchenikam/novosti/",
            vk: "https://vk.com/club205522198",
            max: "https://max.ru/id504016585_gos"
        },
        {
            name: "Какинская СОШ",
            site: "https://sh-kakinskaya-skaka-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205530391",
            max: "https://max.ru/id504007005_gos"
        },
        {
            name: "Гогазская СОШ",
            site: "https://sh-gogazskaya--sgogaz-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205522148",
            max: "https://max.ru/id504006474_gos"
        },
        {
            name: "Курукальская СОШ",
            site: "https://kurukalschool.gosuslugi.ru/",
            vk: "https://vk.com/club205522402",
            max: "https://max.ru/id504006386_gos"
        },
        {
            name: "Калукская СОШ",
            site: "https://sh-kalukskaya-skaluk-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205522221",
            max: "https://max.ru/id504008496_gos"
        },
        {
            name: "Хновская СОШ",
            site: "https://sh-xnovskaya-sxnov-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205530309",
            max: "https://max.ru/id504008489_gos"
        },
        {
            name: "Фийская СОШ",
            site: "https://sh-fijskaya--sfij-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205530228",
            max: "https://max.ru/id504006227_gos"
        },
        {
            name: "Ново-Усурская СОШ",
            site: "https://sh-mkou-nusurskaya-sosh-snusur-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205530164",
            max: "https://max.ru/id504006481_gos"
        },
        {
            name: "Смугульская СОШ",
            site: "https://sh-smugulskaya--ssmugul-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205530199",
            max: "https://max.ru/id504006957_gos"
        },
        {
            name: "Джабинская СОШ",
            site: "https://sh-dzhabinskaya-sdzhaba-r82.gosweb.gosuslugi.ru/",
            vk: "https://vk.com/club205522165",
            max: "https://max.ru/id504005569_gos"
        }
    ]
};