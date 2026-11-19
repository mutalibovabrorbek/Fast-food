/* ==================== 30+ PRODUCTS DATABASE (UPDATED IMAGES) ==================== */
const products = [
    // BURGER
    {
        id: 1,
        name: "Classic Burger",
        category: "BURGER",
        price: 35000,
        oldPrice: 40000,
        rating: 4.5,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        description: "Juicy beef patty with fresh lettuce, tomatoes, onions, and our signature sauce.",
        ingredients: "Beef patty, lettuce, tomato, onion, signature sauce, sesame bun",
        size: "Standard (300g)"
    },
    {
        id: 2,
        name: "Cheeseburger",
        category: "BURGER",
        price: 39000,
        oldPrice: 45000,
        rating: 4.7,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80",
        description: "Classic beef burger topped with a double layer of melted cheddar cheese.",
        ingredients: "Beef patty, double cheddar cheese, pickles, onions, ketchup, mustard",
        size: "Standard (320g)"
    },
    {
        id: 3,
        name: "Double Burger",
        category: "BURGER",
        price: 52000,
        oldPrice: 60000,
        rating: 4.9,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
        description: "Two thick beef patties with double cheese and special smoky sauce.",
        ingredients: "2x Beef patties, double cheese, bacon bits, lettuce, BBQ sauce",
        size: "Large (450g)"
    },
    {
        id: 4,
        name: "Chicken Burger",
        category: "BURGER",
        price: 37000,
        oldPrice: 42000,
        rating: 4.4,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80",
        description: "Crispy fried chicken breast with fresh coleslaw and mayo.",
        ingredients: "Crispy chicken fillet, coleslaw, mayonnaise, brioche bun",
        size: "Standard (310g)"
    },
    {
        id: 5,
        name: "BBQ Burger",
        category: "BURGER",
        price: 45000,
        oldPrice: 50000,
        rating: 4.6,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        description: "Smoky BBQ flavor with crispy onion rings and grilled beef patty.",
        ingredients: "Beef patty, onion rings, cheddar cheese, smoky BBQ sauce",
        size: "Standard (350g)"
    },
    {
        id: 6,
        name: "Spicy Burger",
        category: "BURGER",
        price: 41000,
        oldPrice: 46000,
        rating: 4.3,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80",
        description: "For spice lovers! Jalapenos and fiery habanero sauce.",
        ingredients: "Beef patty, jalapenos, spicy habanero sauce, pepper jack cheese",
        size: "Standard (330g)"
    },
    {
        id: 7,
        name: "Big Burger",
        category: "BURGER",
        price: 59000,
        oldPrice: 68000,
        rating: 4.9,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80",
        description: "The ultimate monster burger with triple meat and cheese layers.",
        ingredients: "3x Beef patties, triple cheese, mushrooms, special sauce",
        size: "Extra Large (600g)"
    },

    // PIZZA
    {
        id: 8,
        name: "Margherita Pizza",
        category: "PIZZA",
        price: 65000,
        oldPrice: 75000,
        rating: 4.6,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        ingredients: "Mozzarella cheese, fresh tomatoes, basil leaves, tomato sauce",
        size: "Medium (35cm)"
    },
    {
        id: 9,
        name: "Pepperoni Pizza",
        category: "PIZZA",
        price: 78000,
        oldPrice: 88000,
        rating: 4.8,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
        description: "Loaded with spicy Italian pepperoni and extra mozzarella.",
        ingredients: "Pepperoni slices, mozzarella, parmesan, tomato sauce",
        size: "Medium (35cm)"
    },
    {
        id: 10,
        name: "Chicken Pizza",
        category: "PIZZA",
        price: 74000,
        oldPrice: 82000,
        rating: 4.5,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        description: "Tender chicken pieces, mushrooms, and creamy garlic sauce.",
        ingredients: "Grilled chicken, mushrooms, garlic sauce, mozzarella",
        size: "Medium (35cm)"
    },
    {
        id: 11,
        name: "BBQ Pizza",
        category: "PIZZA",
        price: 80000,
        oldPrice: 90000,
        rating: 4.7,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: "Smoky BBQ chicken with red onions and cilantro.",
        ingredients: "BBQ chicken, red onion, cilantro, mozzarella, BBQ drizzle",
        size: "Medium (35cm)"
    },
    {
        id: 12,
        name: "Four Cheese Pizza",
        category: "PIZZA",
        price: 85000,
        oldPrice: 95000,
        rating: 4.9,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
        description: "A rich blend of mozzarella, gorgonzola, parmesan, and ricotta.",
        ingredients: "Mozzarella, gorgonzola, parmesan, ricotta cheese",
        size: "Medium (35cm)"
    },

    // LAVASH
    {
        id: 13,
        name: "Classic Lavash",
        category: "LAVASH",
        price: 32000,
        oldPrice: 38000,
        rating: 4.5,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
        description: "Traditional thin flatbread wrapped with meat, fries, and fresh veggies.",
        ingredients: "Beef/Chicken meat, french fries, cucumber, tomato, garlic sauce",
        size: "Standard (350g)"
    },
    {
        id: 14,
        name: "Chicken Lavash",
        category: "LAVASH",
        price: 34000,
        oldPrice: 40000,
        rating: 4.7,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1648437595584-62d15da353b7?auto=format&fit=crop&w=600&q=80",
        description: "Juicy grilled chicken pieces wrapped in crispy lavash bread.",
        ingredients: "Grilled chicken, fries, fresh salad, special sauce",
        size: "Standard (370g)"
    },
    {
        id: 15,
        name: "Beef Lavash",
        category: "LAVASH",
        price: 38000,
        oldPrice: 44000,
        rating: 4.8,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80",
        description: "Tender sliced beef with melted cheese and signature spices.",
        ingredients: "Tender beef slices, cheese, fries, pickles, garlic sauce",
        size: "Standard (380g)"
    },
    {
        id: 16,
        name: "Cheese Lavash",
        category: "LAVASH",
        price: 40000,
        oldPrice: 46000,
        rating: 4.6,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
        description: "Extra melted mozzarella cheese added to our classic chicken lavash.",
        ingredients: "Chicken meat, extra mozzarella cheese, fries, sauce",
        size: "Standard (400g)"
    },

    // HOT DOG
    {
        id: 17,
        name: "Classic Hot Dog",
        category: "HOT DOG",
        price: 20000,
        oldPrice: 25000,
        rating: 4.3,
        isPopular: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80",
        description: "Juicy beef sausage in a soft bun with mustard and ketchup.",
        ingredients: "Beef sausage, soft bun, ketchup, mustard, crispy onions",
        size: "Standard (180g)"
    },
    {
        id: 18,
        name: "Cheese Hot Dog",
        category: "HOT DOG",
        price: 24000,
        oldPrice: 29000,
        rating: 4.5,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80",
        description: "Topped with warm liquid cheddar cheese sauce.",
        ingredients: "Beef sausage, cheddar cheese sauce, relish, bun",
        size: "Standard (200g)"
    },
    {
        id: 19,
        name: "Spicy Hot Dog",
        category: "HOT DOG",
        price: 23000,
        oldPrice: 28000,
        rating: 4.4,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=600&q=80",
        description: "Spicy sausage with jalapenos and fiery hot sauce.",
        ingredients: "Spicy sausage, jalapenos, hot chili sauce, bun",
        size: "Standard (190g)"
    },

    // FRIES
    {
        id: 20,
        name: "French Fries",
        category: "FRIES",
        price: 18000,
        oldPrice: 22000,
        rating: 4.7,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
        description: "Golden, crispy potato fries served with ketchup.",
        ingredients: "Potatoes, vegetable oil, salt, ketchup",
        size: "Medium (200g)"
    },
    {
        id: 21,
        name: "Cheese Fries",
        category: "FRIES",
        price: 25000,
        oldPrice: 30000,
        rating: 4.8,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
        description: "Crispy fries smothered in warm melted cheese.",
        ingredients: "Potatoes, melted cheddar cheese sauce, herbs",
        size: "Medium (250g)"
    },
    {
        id: 22,
        name: "Spicy Fries",
        category: "FRIES",
        price: 21000,
        oldPrice: 26000,
        rating: 4.3,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80",
        description: "Fries dusted with spicy Cajun seasoning.",
        ingredients: "Potatoes, Cajun spice mix, vegetable oil",
        size: "Medium (200g)"
    },

    // CHICKEN
    {
        id: 23,
        name: "Chicken Nuggets",
        category: "CHICKEN",
        price: 28000,
        oldPrice: 33000,
        rating: 4.6,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        description: "Crispy bite-sized chicken nuggets with sweet & sour dip.",
        ingredients: "Chicken breast, breadcrumbs, spices, sweet & sour sauce",
        size: "9 pcs (200g)"
    },
    {
        id: 24,
        name: "Chicken Wings",
        category: "CHICKEN",
        price: 38000,
        oldPrice: 45000,
        rating: 4.8,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
        description: "Spicy glazed chicken wings grilled to perfection.",
        ingredients: "Chicken wings, buffalo glaze, celery sticks, ranch dip",
        size: "6 pcs (300g)"
    },
    {
        id: 25,
        name: "Crispy Chicken",
        category: "CHICKEN",
        price: 42000,
        oldPrice: 48000,
        rating: 4.7,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80",
        description: "Extra crispy fried chicken tenders with honey mustard.",
        ingredients: "Chicken tenders, crispy batter, honey mustard dip",
        size: "4 pcs (320g)"
    },
    {
        id: 26,
        name: "Chicken Strips",
        category: "CHICKEN",
        price: 36000,
        oldPrice: 42000,
        rating: 4.5,
        isPopular: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1585325701165-351af916e501?auto=format&fit=crop&w=600&q=80",
        description: "Tender juicy chicken strips coated in seasoned breadcrumbs.",
        ingredients: "Chicken breast strips, breadcrumbs, spices",
        size: "5 pcs (280g)"
    },

    // DRINKS
    {
        id: 27,
        name: "Coca-Cola",
        category: "DRINKS",
        price: 10000,
        oldPrice: 12000,
        rating: 4.9,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80",
        description: "Refreshing ice-cold Coca-Cola.",
        ingredients: "Carbonated water, sugar, caramel color, phosphoric acid, natural flavors",
        size: "0.5 L"
    },
    {
        id: 28,
        name: "Pepsi",
        category: "DRINKS",
        price: 10000,
        oldPrice: 12000,
        rating: 4.8,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=80",
        description: "Ice-cold refreshing Pepsi cola.",
        ingredients: "Carbonated water, high fructose corn syrup, caramel color, sugar",
        size: "0.5 L"
    },
    {
        id: 29,
        name: "Fanta",
        category: "DRINKS",
        price: 10000,
        oldPrice: 12000,
        rating: 4.6,
        isPopular: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80",
        description: "Sweet and tangy orange-flavored soda.",
        ingredients: "Carbonated water, orange juice from concentrate, sugar, citric acid",
        size: "0.5 L"
    },
    {
        id: 30,
        name: "Sprite",
        category: "DRINKS",
        price: 10000,
        oldPrice: 12000,
        rating: 4.7,
        isPopular: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80",
        description: "Crisp, clean lemon-lime refreshing taste.",
        ingredients: "Carbonated water, high fructose corn syrup, citric acid, natural flavors",
        size: "0.5 L"
    },
    {
        id: 31,
        name: "Orange Juice",
        category: "DRINKS",
        price: 14000,
        oldPrice: 17000,
        rating: 4.8,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
        description: "100% freshly squeezed natural orange juice.",
        ingredients: "Fresh oranges, vitamin C",
        size: "0.4 L"
    },
    {
        id: 32,
        name: "Water",
        category: "DRINKS",
        price: 6000,
        oldPrice: 8000,
        rating: 4.9,
        isPopular: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80",
        description: "Pure purified natural bottled water.",
        ingredients: "Purified natural spring water",
        size: "0.5 L"
    },
    {
        id: 33,
        name: "Milkshake",
        category: "DRINKS",
        price: 22000,
        oldPrice: 26000,
        rating: 4.9,
        isPopular: true,
        isNew: true,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        description: "Creamy vanilla milkshake topped with whipped cream.",
        ingredients: "Fresh milk, vanilla ice cream, whipped cream, syrup",
        size: "0.4 L"
    },

    // DESSERTS
    {
        id: 34,
        name: "Ice Cream",
        category: "DESSERTS",
        price: 15000,
        oldPrice: 18000,
        rating: 4.7,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80",
        description: "Rich and creamy chocolate ice cream scoop.",
        ingredients: "Milk, cream, sugar, cocoa powder, chocolate chips",
        size: "Standard (150g)"
    },
    {
        id: 35,
        name: "Chocolate Cake",
        category: "DESSERTS",
        price: 26000,
        oldPrice: 32000,
        rating: 4.9,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        description: "Decadent multi-layer chocolate fudge cake.",
        ingredients: "Flour, cocoa, chocolate ganache, eggs, butter, sugar",
        size: "1 slice (180g)"
    },
    {
        id: 36,
        name: "Donut",
        category: "DESSERTS",
        price: 12000,
        oldPrice: 15000,
        rating: 4.5,
        isPopular: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        description: "Fluffy glazed donut with colorful sprinkles.",
        ingredients: "Dough, sugar glaze, colorful sprinkles",
        size: "1 pc (90g)"
    },
    {
        id: 37,
        name: "Cheesecake",
        category: "DESSERTS",
        price: 28000,
        oldPrice: 34000,
        rating: 4.8,
        isPopular: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        description: "New York style creamy cheesecake with strawberry topping.",
        ingredients: "Cream cheese, graham cracker crust, strawberry coulis",
        size: "1 slice (160g)"
    }
];

/* ==================== TRANSLATIONS ==================== */
const translations = {
    uz: {
        home: "Bosh sahifa",
        menu: "Menyu",
        about: "Biz haqimizda",
        contact: "Aloqa",
        heroSubtitle: "Tez va Mazali",
        heroTitle: "Istalgan vaqtda mazali fast fooddan bahramand bo'ling",
        heroDesc: "Burgerlar, pitsalar, lavashlar va boshqa lazzatli taomlarimiz bilan chanqog'ingiz va ochligingizni qondiring. Issiq va yangi holda eshigingizgacha yetkazib beramiz.",
        orderNow: "Buyurtma berish",
        exploreMenu: "Menyuni ko'rish",
        feat1Title: "Tezkor yetkazib berish",
        feat1Desc: "30 daqiqada yetkazamiz yoki tekin",
        feat2Title: "Yangi mahsulotlar",
        feat2Desc: "Faqat yuqori sifatli masalliqlar",
        feat3Title: "24/7 Qo'llab-quvvatlash",
        feat3Desc: "Doimo yordam berishga tayyormiz",
        menuTitle: "Bizning mazali menyu",
        menuSubtitle: "Keng turdagi fast food mahsulotlarimizdan tanlang",
        filterAll: "Barcha mahsulotlar",
        filterPopular: "Eng mashhurlari",
        filterLowHigh: "Arzonidan qimmatiga",
        filterHighLow: "Qimmatidan arzoniga",
        filterRating: "Reyting bo'yicha",
        filterNew: "Yangi mahsulotlar",
        filterDiscount: "Chegirmadagilar",
        catAll: "Barchasi",
        catBurger: "Burger",
        catPizza: "Pitsa",
        catLavash: "Lavash",
        catHotdog: "Hot Dog",
        catFries: "Fries",
        catChicken: "Chicken",
        catDrinks: "Ichimliklar",
        catDesserts: "Shirinliklar",
        aboutSubtitle: "FOODLY haqida",
        aboutTitle: "Biz eng yuqori sifatli fast food taqdim etamiz",
        aboutDesc: "FOODLY eng sara masalliqlardan tayyorlangan yangi va mazali fast food taqdim etish maqsadi bilan tashkil etilgan. Oshpazlarimiz sizga unutilmas ta'm taqdim etish uchun an'anaviy retseptlarni zamonaviy lazzatlar bilan birlashtiradi.",
        statDishes: "Taomlar",
        statClients: "Mamnun mijozlar",
        statYears: "Yillik tajriba",
        contactTitle: "Bog'lanish",
        contactSubtitle: "Sizdan xabar kutib qolamiz",
        addressTitle: "Manzil",
        phoneTitle: "Telefon",
        emailTitle: "Elektron pochta",
        sendMsg: "Xabar yuborish",
        quickLinks: "Tezkor havolalar",
        categoriesFooter: "Kategoriyalar",
        newsletterTitle: "Yangiliklarga obuna",
        newsletterDesc: "Maxsus takliflar va chegirmalardan xabardor bo'ling.",
        cartTitle: "Savatchangiz",
        favTitle: "Sevimlilar",
        login: "Kirish",
        register: "Ro'yxatdan o'tish",
        emailOrPhone: "Email yoki Telefon raqam",
        password: "Parol",
        rememberMe: "Eslab qolish",
        forgotPass: "Parolni unutdingizmi?",
        loginBtn: "Kirish",
        firstName: "Ism",
        lastName: "Familiya",
        email: "Email",
        phone: "Telefon raqam",
        confirmPassword: "Parolni tasdiqlash",
        registerBtn: "Ro'yxatdan o'tish",
        checkoutTitle: "Buyurtmani rasmiylashtirish",
        city: "Viloyat / Shahar",
        district: "Tuman",
        street: "Ko'cha",
        house: "Uy raqami",
        comment: "Qo'shimcha izoh",
        subtotal: "Mahsulotlar narxi:",
        deliveryFee: "Yetkazib berish:",
        totalAmount: "Umumiy summa:",
        placeOrder: "Buyurtmani tasdiqlash",
        emptyCart: "Savatchangiz bo'sh",
        emptyFav: "Sevimlilar ro'yxati bo'sh",
        addToCart: "Qo'shish",
        viewDetails: "Batafsil",
        ingredients: "Tarkibi:",
        size: "Hajmi:",
        quantity: "Soni:"
    },
    en: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact",
        heroSubtitle: "Fast & Delicious",
        heroTitle: "Enjoy Delicious Fast Food Anytime",
        heroDesc: "Satisfy your cravings with our premium burgers, pizzas, lavash, and more. Delivered hot & fresh to your door.",
        orderNow: "Order Now",
        exploreMenu: "Explore Menu",
        feat1Title: "Fast Delivery",
        feat1Desc: "Delivery in 30 minutes or free",
        feat2Title: "Fresh Food",
        feat2Desc: "Made with high quality ingredients",
        feat3Title: "24/7 Support",
        feat3Desc: "Always here to help you out",
        menuTitle: "Our Delicious Menu",
        menuSubtitle: "Choose from our wide variety of fast food items",
        filterAll: "All Products",
        filterPopular: "Most Popular",
        filterLowHigh: "Price: Low to High",
        filterHighLow: "Price: High to Low",
        filterRating: "Top Rated",
        filterNew: "New Items",
        filterDiscount: "Discounts",
        catAll: "All",
        catBurger: "Burger",
        catPizza: "Pizza",
        catLavash: "Lavash",
        catHotdog: "Hot Dog",
        catFries: "Fries",
        catChicken: "Chicken",
        catDrinks: "Drinks",
        catDesserts: "Desserts",
        aboutSubtitle: "About FOODLY",
        aboutTitle: "We Provide Best Quality Fast Food",
        aboutDesc: "FOODLY was founded with a simple mission: to serve fresh, mouth-watering fast food crafted from the finest ingredients. Our chefs combine traditional recipes with modern flavors to bring you an unforgettable culinary experience.",
        statDishes: "Dishes",
        statClients: "Happy Clients",
        statYears: "Years Experience",
        contactTitle: "Get In Touch",
        contactSubtitle: "We would love to hear from you",
        addressTitle: "Address",
        phoneTitle: "Phone",
        emailTitle: "Email",
        sendMsg: "Send Message",
        quickLinks: "Quick Links",
        categoriesFooter: "Categories",
        newsletterTitle: "Newsletter",
        newsletterDesc: "Subscribe for special offers and discounts.",
        cartTitle: "Your Cart",
        favTitle: "Favorite Products",
        login: "Login",
        register: "Register",
        emailOrPhone: "Email or Phone",
        password: "Password",
        rememberMe: "Remember Me",
        forgotPass: "Forgot Password?",
        loginBtn: "Login",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        confirmPassword: "Confirm Password",
        registerBtn: "Register",
        checkoutTitle: "Checkout Order",
        city: "City / Region",
        district: "District",
        street: "Street",
        house: "House / Apartment",
        comment: "Additional Notes",
        subtotal: "Subtotal:",
        deliveryFee: "Delivery Fee:",
        totalAmount: "Total Amount:",
        placeOrder: "Place Order",
        emptyCart: "Your cart is empty",
        emptyFav: "Your favorites list is empty",
        addToCart: "Add",
        viewDetails: "View Details",
        ingredients: "Ingredients:",
        size: "Size:",
        quantity: "Quantity:"
    },
    ru: {
        home: "Главная",
        menu: "Меню",
        about: "О нас",
        contact: "Контакты",
        heroSubtitle: "Быстро и Вкусно",
        heroTitle: "Наслаждайтесь вкусным фастфудом в любое время",
        heroDesc: "Утолите голод нашими премиальными бургерами, пиццами, лавашами и многим другим. Горячим и свежим к вашему порогу.",
        orderNow: "Заказать",
        exploreMenu: "Смотреть меню",
        feat1Title: "Быстрая доставка",
        feat1Desc: "Доставка за 30 минут или бесплатно",
        feat2Title: "Свежая еда",
        feat2Desc: "Только из высококачественных ингредиентов",
        feat3Title: "Поддержка 24/7",
        feat3Desc: "Всегда готовы вам помочь",
        menuTitle: "Наше вкусное меню",
        menuSubtitle: "Выберите из широкого ассортимента блюд фастфуда",
        filterAll: "Все продукты",
        filterPopular: "Самые популярные",
        filterLowHigh: "Цена: по возрастанию",
        filterHighLow: "Цена: по убыванию",
        filterRating: "По рейтингу",
        filterNew: "Новинки",
        filterDiscount: "Скидки",
        catAll: "Все",
        catBurger: "Бургер",
        catPizza: "Пицца",
        catLavash: "Лаваш",
        catHotdog: "Хот-дог",
        catFries: "Картофель",
        catChicken: "Курица",
        catDrinks: "Напитки",
        catDesserts: "Десерты",
        aboutSubtitle: "О компании FOODLY",
        aboutTitle: "Мы предлагаем фастфуд наилучшего качества",
        aboutDesc: "FOODLY была основана с простой миссией: подавать свежий, аппетитный фастфуд, приготовленный из лучших ингредиентов. Наши повара сочетают традиционные рецепты с современными вкусами.",
        statDishes: "Блюд",
        statClients: "Довольных клиентов",
        statYears: "Лет опыта",
        contactTitle: "Связаться с нами",
        contactSubtitle: "Мы будем рады услышать вас",
        addressTitle: "Адрес",
        phoneTitle: "Телефон",
        emailTitle: "Эл. почта",
        sendMsg: "Отправить сообщение",
        quickLinks: "Быстрые ссылки",
        categoriesFooter: "Категории",
        newsletterTitle: "Рассылка",
        newsletterDesc: "Подпишитесь на специальные предложения и скидки.",
        cartTitle: "Ваша корзина",
        favTitle: "Избранные товары",
        login: "Войти",
        register: "Регистрация",
        emailOrPhone: "Email или Телефон",
        password: "Пароль",
        rememberMe: "Запомнить меня",
        forgotPass: "Забыли пароль?",
        loginBtn: "Войти",
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Email",
        phone: "Номер телефона",
        confirmPassword: "Подтвердите пароль",
        registerBtn: "Зарегистрироваться",
        checkoutTitle: "Оформить заказ",
        city: "Город / Регион",
        district: "Район",
        street: "Улица",
        house: "Дом / Квартира",
        comment: "Дополнительные примечания",
        subtotal: "Сумма:",
        deliveryFee: "Доставка:",
        totalAmount: "Итого к оплате:",
        placeOrder: "Подтвердить заказ",
        emptyCart: "Ваша корзина пуста",
        emptyFav: "Список избранного пуст",
        addToCart: "Добавить",
        viewDetails: "Подробнее",
        ingredients: "Ингредиенты:",
        size: "Размер:",
        quantity: "Количество:"
    }
};

/* ==================== APP STATE & LOCALSTORAGE ==================== */
let currentLang = localStorage.getItem('foodly_lang') || 'uz';
let currentTheme = localStorage.getItem('foodly_theme') || 'light';
let cart = JSON.parse(localStorage.getItem('foodly_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('foodly_favorites')) || [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'all';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80";

// DOM Elements
const loader = document.getElementById('loader');
const langSelect = document.getElementById('langSelect');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categoriesTabs = document.getElementById('categoriesTabs');

const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const closeCartDrawer = document.getElementById('closeCartDrawer');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');

const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesDrawer = document.getElementById('favoritesDrawer');
const closeFavoritesDrawer = document.getElementById('closeFavoritesDrawer');
const favoritesItemsContainer = document.getElementById('favoritesItemsContainer');
const favoritesCount = document.getElementById('favoritesCount');

const userBtn = document.getElementById('userBtn');
const authModal = document.getElementById('authModal');
const closeAuthModal = document.getElementById('closeAuthModal');
const loginTabBtn = document.getElementById('loginTabBtn');
const registerTabBtn = document.getElementById('registerTabBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');
const productModalBody = document.getElementById('productModalBody');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const toast = document.getElementById('toast');

/* ==================== INITIALIZATION ==================== */
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 500);

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    langSelect.value = currentLang;
    setLanguage(currentLang);

    renderProducts();
    updateBadges();
    initEventListeners();
});

/* ==================== EVENT LISTENERS ==================== */
function initEventListeners() {
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('foodly_theme', currentTheme);
        updateThemeIcon();
    });

    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('foodly_lang', currentLang);
        setLanguage(currentLang);
        renderProducts();
        renderCart();
        renderFavorites();
    });

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
    });

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    categoriesTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('cat-btn')) {
            document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.getAttribute('data-category');
            renderProducts();
        }
    });

    cartBtn.addEventListener('click', () => {
        renderCart();
        cartDrawer.classList.add('active');
    });
    closeCartDrawer.addEventListener('click', () => cartDrawer.classList.remove('active'));
    cartDrawer.addEventListener('click', (e) => {
        if (e.target === cartDrawer) cartDrawer.classList.remove('active');
    });

    favoritesBtn.addEventListener('click', () => {
        renderFavorites();
        favoritesDrawer.classList.add('active');
    });
    closeFavoritesDrawer.addEventListener('click', () => favoritesDrawer.classList.remove('active'));
    favoritesDrawer.addEventListener('click', (e) => {
        if (e.target === favoritesDrawer) favoritesDrawer.classList.remove('active');
    });

    userBtn.addEventListener('click', () => authModal.classList.add('active'));
    closeAuthModal.addEventListener('click', () => authModal.classList.remove('active'));
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) authModal.classList.remove('active');
    });

    loginTabBtn.addEventListener('click', () => {
        loginTabBtn.classList.add('active');
        registerTabBtn.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });

    registerTabBtn.addEventListener('click', () => {
        registerTabBtn.classList.add('active');
        loginTabBtn.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    closeProductModal.addEventListener('click', () => productModal.classList.remove('active'));
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) productModal.classList.remove('active');
    });

    closeCheckoutModal.addEventListener('click', () => checkoutModal.classList.remove('active'));
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) checkoutModal.classList.remove('active');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Successfully logged in!");
        authModal.classList.remove('active');
        loginForm.reset();
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pass = document.getElementById('regPassword').value;
        const confirmPass = document.getElementById('regConfirmPassword').value;
        if (pass !== confirmPass) {
            showToast("Passwords do not match!");
            return;
        }
        showToast("Successfully registered!");
        authModal.classList.remove('active');
        registerForm.reset();
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Order placed successfully! Thank you!");
        cart = [];
        saveCart();
        updateBadges();
        checkoutModal.classList.remove('active');
        checkoutForm.reset();
    });

    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Message sent successfully!");
        e.target.reset();
    });
}

/* ==================== HELPER FUNCTIONS ==================== */
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function formatPrice(price) {
    return price.toLocaleString('uz-UZ') + " UZS";
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function updateBadges() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    favoritesCount.textContent = favorites.length;
}

/* ==================== RENDER PRODUCTS ==================== */
function renderProducts() {
    let filtered = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (currentSort === 'popular') {
        filtered = filtered.filter(p => p.isPopular);
    } else if (currentSort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'new') {
        filtered = filtered.filter(p => p.isNew);
    } else if (currentSort === 'discount') {
        filtered = filtered.filter(p => p.oldPrice > p.price);
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No products found.</p>`;
        return;
    }

    productsGrid.innerHTML = filtered.map(product => {
        const isFav = favorites.some(id => id === product.id);
        const t = translations[currentLang];
        return `
            <div class="product-card">
                ${product.oldPrice > product.price ? `<span class="product-badge">Sale</span>` : ''}
                ${product.isNew ? `<span class="product-badge" style="background-color: var(--accent-color); left: ${product.oldPrice > product.price ? '65px' : '15px'};">New</span>` : ''}
                <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    <i class="fa-solid fa-heart"></i>
                </button>
                <div class="product-image" onclick="openProductModal(${product.id})">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';">
                </div>
                <div class="product-info">
                    <div class="product-meta">
                        <span class="product-category">${product.category}</span>
                        <span class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
                    </div>
                    <h3 class="product-title" onclick="openProductModal(${product.id})">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price">
                            <span class="current-price">${formatPrice(product.price)}</span>
                            ${product.oldPrice > product.price ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="${t.addToCart}">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/* ==================== PRODUCT DETAIL MODAL ==================== */
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const t = translations[currentLang];

    productModalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;" class="modal-grid-resp">
            <div>
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';" style="width: 100%; border-radius: 16px; object-fit: cover;">
            </div>
            <div>
                <span class="product-category" style="margin-bottom: 10px; display: block;">${product.category}</span>
                <h2 style="font-size: 24px; margin-bottom: 10px;">${product.name}</h2>
                <div class="product-rating" style="margin-bottom: 15px;"><i class="fa-solid fa-star"></i> ${product.rating} / 5.0</div>
                <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 15px;">${product.description}</p>
                <p style="font-size: 13px; margin-bottom: 8px;"><strong>${t.ingredients}</strong> ${product.ingredients}</p>
                <p style="font-size: 13px; margin-bottom: 20px;"><strong>${t.size}</strong> ${product.size}</p>
                <div style="font-size: 24px; font-weight: 700; color: var(--primary-color); margin-bottom: 20px;">${formatPrice(product.price)}</div>
                <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}); productModal.classList.remove('active');">
                    <i class="fa-solid fa-bag-shopping" style="margin-right: 8px;"></i> ${t.addToCart}
                </button>
            </div>
        </div>
    `;
    productModal.classList.add('active');
}

/* ==================== CART FUNCTIONS ==================== */
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateBadges();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateBadges();
    renderCart();
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        saveCart();
        updateBadges();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('foodly_cart', JSON.stringify(cart));
}

function renderCart() {
    const t = translations[currentLang];
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 50px 0;"><i class="fa-solid fa-bag-shopping" style="font-size: 50px; margin-bottom: 15px; opacity: 0.5;"></i><p>${t.emptyCart}</p></div>`;
        cartFooter.innerHTML = '';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--border-color);">
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';" style="width: 70px; height: 70px; object-fit: cover; border-radius: 10px;">
            <div style="flex: 1;">
                <h4 style="font-size: 15px; margin-bottom: 4px;">${item.name}</h4>
                <div style="color: var(--primary-color); font-weight: 700; font-size: 14px;">${formatPrice(item.price)}</div>
                <div style="display: flex; align-items: center; gap: 10px; margin-top: 8px;">
                    <button onclick="changeQuantity(${item.id}, -1)" style="width: 24px; height: 24px; background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer; color: var(--text-color);">-</button>
                    <span style="font-size: 14px; font-weight: 600;">${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)" style="width: 24px; height: 24px; background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer; color: var(--text-color);">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" style="color: var(--text-muted); cursor: pointer; background: none; font-size: 16px;"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = 15000;
    const total = subtotal + delivery;

    cartFooter.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; font-size: 14px; color: var(--text-muted);">
                <span>${t.subtotal}</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 14px; color: var(--text-muted);">
                <span>${t.deliveryFee}</span>
                <span>${formatPrice(delivery)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: 700; color: var(--text-color); border-top: 1px solid var(--border-color); padding-top: 10px;">
                <span>${t.totalAmount}</span>
                <span>${formatPrice(total)}</span>
            </div>
        </div>
        <button class="btn btn-primary btn-block" onclick="openCheckoutModal(${subtotal}, ${total})">Proceed to Checkout</button>
    `;
}

function openCheckoutModal(subtotal, total) {
    cartDrawer.classList.remove('active');
    document.getElementById('chkSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('chkTotal').textContent = formatPrice(total);
    checkoutModal.classList.add('active');
}

/* ==================== FAVORITES FUNCTIONS ==================== */
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast("Removed from favorites");
    } else {
        favorites.push(id);
        showToast("Added to favorites");
    }
    localStorage.setItem('foodly_favorites', JSON.stringify(favorites));
    updateBadges();
    renderProducts();
}

function renderFavorites() {
    const t = translations[currentLang];
    const favProducts = products.filter(p => favorites.includes(p.id));

    if (favProducts.length === 0) {
        favoritesItemsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 50px 0;"><i class="fa-solid fa-heart" style="font-size: 50px; margin-bottom: 15px; opacity: 0.5;"></i><p>${t.emptyFav}</p></div>`;
        return;
    }

    favoritesItemsContainer.innerHTML = favProducts.map(item => `
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--border-color);">
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';" style="width: 70px; height: 70px; object-fit: cover; border-radius: 10px;">
            <div style="flex: 1;">
                <h4 style="font-size: 15px; margin-bottom: 4px;">${item.name}</h4>
                <div style="color: var(--primary-color); font-weight: 700; font-size: 14px;">${formatPrice(item.price)}</div>
            </div>
            <button onclick="addToCart(${item.id}); favoritesDrawer.classList.remove('active');" style="background-color: var(--primary-color); color: #fff; width: 35px; height: 35px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer;"><i class="fa-solid fa-plus"></i></button>
            <button onclick="toggleFavorite(${item.id}); renderFavorites();" style="color: var(--text-muted); cursor: pointer; background: none; font-size: 16px;"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');
}