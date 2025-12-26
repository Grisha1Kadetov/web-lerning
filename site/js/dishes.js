const dishes = [
    // супы
    {
        keyword: "pumpkin_soup",
        name: "Крем-суп из тыквы",
        price: 190,
        category: "soups",
        kind: "veg",
        count: "250 мл",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZXz1icgds3juru-Js01MYd0PH07O1LHv2w&s"
    },
    {
        keyword: "chicken_noodle",
        name: "Куриный суп с домашней лапшой",
        price: 210,
        category: "soups",
        kind: "meat",
        count: "300 мл",
        image: "https://aif-s3.aif.ru/images/013/788/4fc475dcc8aada55269d2a7bd92401fb.jpg"
    },
    {
        keyword: "tom_yam",
        name: "Пряный суп Том ям с креветками",
        price: 260,
        category: "soups",
        kind: "fish",
        count: "300 мл",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMy00uZSsYSczD0IgHuT355LFuysoIMjgVYA&s"
    },
    {
        keyword: "veg_soup_extra",
        name: "Овощной суп",
        price: 180,
        category: "soups",
        kind: "veg",
        count: "300 мл",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGO2XbK58IxWoGA5Sw8C9QJkKkXPHf1ViUTg&s"
    },
    {
        keyword: "fish_soup_extra",
        name: "Рыбный суп",
        price: 230,
        category: "soups",
        kind: "fish",
        count: "300 мл",
        image: "https://vkusnoff.com/img/recepty/5600/big.webp"
    },
    {
        keyword: "meat_soup_extra",
        name: "Суп с говядиной",
        price: 240,
        category: "soups",
        kind: "meat",
        count: "350 мл",
        image: "https://www.russianfood.com/dycontent/images_upl/628/big_627847.jpg"
    },

    // главные блюда
    {
        keyword: "chicken_rice",
        name: "Куриное филе с рисом и овощами",
        price: 280,
        category: "mains",
        kind: "meat",
        count: "320 г",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEIEWSYbEI-Wzn6LKruurkqbr1TJlH9jlwQ&s"
    },
    {
        keyword: "salmon_pasta",
        name: "Паста с лососем в сливочном соусе",
        price: 320,
        category: "mains",
        kind: "fish",
        count: "350 г",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
    },
    {
        keyword: "beef_stew",
        name: "Тушёная говядина с овощами и картофелем по-домашнему",
        price: 340,
        category: "mains",
        kind: "meat",
        count: "330 г",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80"
    },
    {
        keyword: "veg_main_extra",
        name: "Овощное рагу",
        price: 260,
        category: "mains",
        kind: "veg",
        count: "300 г",
        image: "https://images.gastronom.ru/iQgVc5MKEUrc-fw0PYC3pOaivniuHw5gArkq-33MLzc/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2ZjMGY5MjBhLTZiMDgtNGQ1Mi1hZjY1LTEwODY3OTFmZTczYi5qcGc.webp"
    },
    {
        keyword: "fish_main_extra",
        name: "Рыба с овощами",
        price: 310,
        category: "mains",
        kind: "fish",
        count: "320 г",
        image: "https://shuba.life/static/content/thumbs/1824x912/5/13/hpjf7i---c2x1x50px50p-up--6dd71fa90e3074da0473a1786e860135.jpg"
    },
    {
        keyword: "veg_main_extra_2",
        name: "Овощи на гриле",
        price: 250,
        category: "mains",
        kind: "veg",
        count: "300 г",
        image: "https://static.insales-cdn.com/files/1/4299/10416331/original/5-1.jpg"
    },

    // напитки
    {
        keyword: "mors",
        name: "Домашний клюквенный морс",
        price: 90,
        category: "drinks",
        kind: "cold",
        count: "250 мл",
        image: "https://lifehacker.ru/wp-content/uploads/2019/09/8C304672-1662-4C9C-8073-685B93CC2B4B_1569436750.jpeg"
    },
    {
        keyword: "tea",
        name: "Чай чёрный с лимоном",
        price: 70,
        category: "drinks",
        kind: "hot",
        count: "300 мл",
        image: "https://avatars.mds.yandex.net/get-vertis-journal/4080458/a7514b44-b93a-4433-92e8-4047ef8615dd.jpeg/1600x1600"
    },
    {
        keyword: "lemonade",
        name: "Домашний лимонад с мятой",
        price: 110,
        category: "drinks",
        kind: "cold",
        count: "250 мл",
        image: "https://static.vkusnyblog.com/full/uploads/2013/07/myatnyi-limonad.jpg"
    },
    {
        keyword: "hot_drink_extra",
        name: "Какао",
        price: 120,
        category: "drinks",
        kind: "hot",
        count: "250 мл",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4WCmncluKTPZ37XOeJnb4OjxmVK8oJLZVw&s"
    },
    {
        keyword: "cold_drink_extra",
        name: "Холодный чай",
        price: 100,
        category: "drinks",
        kind: "cold",
        count: "300 мл",
        image: "https://ivona.ua/i/52/98/85/2/5298852/678143e20af14a31836dec8103e7b4c3-quality_100Xallow_enlarge_0Xw_600Xh_0.jpg"
    },
    {
        keyword: "hot_drink_extra_2",
        name: "Кофе американо",
        price: 130,
        category: "drinks",
        kind: "hot",
        count: "200 мл",
        image: "https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg"
    },

    // салаты и стартеры
    {
        keyword: "veg_salad",
        name: "Овощной салат",
        price: 150,
        category: "salads",
        kind: "veg",
        count: "200 г",
        image: "https://www.russianfood.com/dycontent/images_upl/345/big_344904.jpg"
    },
    {
        keyword: "meat_salad",
        name: "Салат с курицей",
        price: 190,
        category: "salads",
        kind: "meat",
        count: "220 г",
        image: "https://rutxt.ru/files/22133/final/deb2c6df46.JPG"
    },
    {
        keyword: "fish_salad",
        name: "Салат с тунцом",
        price: 210,
        category: "salads",
        kind: "fish",
        count: "200 г",
        image: "https://dikoed.ru/upload/iblock/1ce/15545-ovoshchnoy-salat-s-tuntsom.jpg"
    },
    {
        keyword: "veg_salad_extra_1",
        name: "Салат по французски",
        price: 140,
        category: "salads",
        kind: "veg",
        count: "180 г",
        image: "https://alimero.ru/uploads/images/20/36/19/2018/12/08/08ff2f.jpg"
    },
    {
        keyword: "veg_salad_extra_2",
        name: "Салат с авокадо",
        price: 170,
        category: "salads",
        kind: "veg",
        count: "200 г",
        image: "https://img.povar.ru/mobile/19/86/d2/fb/legkii_salat_s_avokado-417404.png"
    },
    {
        keyword: "veg_salad_extra_3",
        name: "Помидорный салат с базиликом",
        price: 130,
        category: "salads",
        kind: "veg",
        count: "160 г",
        image: "https://img.povar.ru/mobile/15/15/47/01/salat_iz_pomidorov_s_bazilikom_i_medom-763014.JPG"
    },

    // десерты
    {
        keyword: "dessert_small",
        name: "Печенье овсяное",
        price: 90,
        category: "desserts",
        kind: "small",
        count: "80 г",
        image: "https://www.patee.ru/r/x6/0b/48/c5/960m.jpg"
    },
    {
        keyword: "dessert_medium",
        name: "Чизкейк",
        price: 190,
        category: "desserts",
        kind: "medium",
        count: "150 г",
        image: "https://prostokvashino.ru/upload/resize_cache/iblock/668/800_800_0/668fac618d034d52e449cdeb173d7aec.jpg"
    },
    {
        keyword: "dessert_large",
        name: "Торт шоколадный",
        price: 260,
        category: "desserts",
        kind: "large",
        count: "200 г",
        image: "https://aif-s3.aif.ru/images/009/987/002d5e930aab5f9ba840f374a3e142aa.jpg"
    },
    {
        keyword: "dessert_small_2",
        name: "Тульский пряник",
        price: 80,
        category: "desserts",
        kind: "small",
        count: "70 г",
        image: "https://static.1000.menu/img/content-v2/41/98/43900/tulskii-pryanik-v-domashnix-usloviyax_1617980015_9_max.jpg"
    },
    {
        keyword: "dessert_small_3",
        name: "Кекс",
        price: 95,
        category: "desserts",
        kind: "small",
        count: "90 г",
        image: "https://img.iamcook.ru/2021/upl/recipes/cat/u-08931638e46ad0a96f09b1dd46da0ec7.JPG"
    },
    {
        keyword: "dessert_medium_2",
        name: "Тирамису",
        price: 210,
        category: "desserts",
        kind: "medium",
        count: "160 г",
        image: "https://ist.say7.info/img0005/69/569_0173u3g_3966_1024.jpg"
    }
];
