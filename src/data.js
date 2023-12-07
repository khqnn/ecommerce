export const businesses = [
  {
    "id": 123,
    "name": "vape",
    "logo": "https://files-manywho-com.s3.amazonaws.com/038d12aa-2256-455c-9b4e-8e620970e451/Atom-WordMark-clr.png",
    "announcement_text": "Super Deal! Free Shipping on Orders Over $50",
    "menu_items": [{ "title": "Home", "path": "/" }, { "title": "Men", "path": null, "categories": [{ "title": "Top Wear", "path": "/shop/men-top-wear" }, { "title": "Accessories", "path": "/shop/men-accessories" }, { "title": "Jackets", "path": "/shop/jackets" }] }, { "title": "Women", "path": null, "categories": [{ "title": "Top Wear", "path": "/shop/women-top-wears" }, { "title": "Accessories", "path": "/shop/women-accessories" }, { "title": "Under Garments", "path": "/shop/women-under-garments" }] }, { "title": "Childer", "path": "/shop/childern" }, { "title": "Glasses", "path": "/shop/glasses" }, { "title": "Scarfs", "path": "/shop/scarfs" }],
    "header": {
      "id": "simple",
      "settings": {
        "background_color_navbar": "white",
        "text_color_navbar": "black",
        "background_color_menubar": "white",
        "text_color_menubar": "black",
        "background_color_hover": "teal",
        "text_color_hover": "white",
        "announcement_text": "Welcome to new header..",
        "announcement_background": "gray"
      }
    },
    "product_card": {
      "id": "simple",
      "settings": {}
    },
    "category_card": {
      "id": "simple",
      "settings": {}
    },
    "slider": {
      "items": [
        {
          "id": 3,
          "img": "https://i.ibb.co/cXFnLLV/3.png",
          "title": "LOUNGEWEAR LOVE",
          "desc": "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          "bg": "fbf0f4",
          "btn": {
            "text": "SHOP NOW",
            "path": "/shop/shirts",
            "background": "white",
            "color": "black"
          }

        },
        {
          "id": 1,
          "img": "https://stat4.bollywoodhungama.in/wp-content/uploads/2017/10/Anushka-Sharma-launches-her-own-signature-apparel-line-NUSH-11.jpg",
          "title": "SUMMER SALE",
          "desc": "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          "bg": "#fff",
          "btn": {
            "text": "SHOP NOW",
            "path": "/shop/shirts",
            "background": "white",
            "color": "black"
          }
        },
        {
          "id": 2,
          "img": "https://i.ibb.co/DG69bQ4/2.png",
          "title": "AUTUMN COLLECTION",
          "desc": "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          "bg": "gray",
          "text_color": "white",
          "btn": {
            "text": "SHOP NOW",
            "path": "/shop/shirts",
            "background": "white",
            "color": "black"
          }
        },

      ]
    }
  },
  {
    "id": 124,
    "name": "lama",
    "logo": "data:image/png;base64,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",
    "announcement_text": "Shipping charges will be free on orders amount $50 Plus!",
    "menu_items": [{ "title": "Home", "path": "/" }, { "title": "Laptop", "path": null, "categories": [{ "title": "Screen", "path": "/shop/laptop-screens" }, { "title": "Accessories", "path": "/shop/laptop-accessories" }, { "title": "Battery", "path": "/shop/laptop-batteries" }, { "title": "Cover", "path": "/shop/laptop-covers" }] }, { "title": "Mobile", "path": null, "categories": [{ "title": "Battery", "path": "/shop/mobile-batteries" }, { "title": "Accessories", "path": "/shop/mobile-accessories" }, { "title": "Cover", "path": "/shop/mobile-covers" }] }, { "title": "Watches", "path": "/shop/watched" }],
    "header": {
      "id": "standard",
      "settings": {
        "announcement_text": "Get free shipping upto $50 shopping!",
        "announcement_background": "black",

        "background_color_header": "white",
        "text_color_header": "black",
        "background_color_hover": "black",
        "text_color_hover": "white"
      }
    },
    "product_card": {
      "id": "plain",
      "settings": {}
    },
    "category_card": {
      "id": "simple",
      "settings": {}
    },
    "slider": {
      "items": []
    },
    "shop_page": {
      "id": "standard",
      "settings": {}
    }

  }
]

export const categories = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "SHIRT STYLE",
    banner: "https://png.pngtree.com/png-clipart/20211101/original/pngtree-summer-e-commerce-promotion-shoes-banner-png-image_6909677.png",
    slug: "shirts",
    filters: [
      {
        id: 1,
        name: "color",
        options: ["red", "green", "blue", "yellow"]
      },
      {
        id: 2,
        name: "size",
        options: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "LOUNGEWEAR LOVE",
    slug: "loungewear"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "LIGHT JACKETS",
    slug: "light-jackets"
  },
];

export const products = [
  {
    "id": 1,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/349d779a-6d86-4982-9c0f-93f979038cc4/court-vision-low-next-nature-womens-shoes-ZkMMBG.png",
    "name": "Nike Court Vision Low Next Nature",
    "description": "A stylish and comfortable jumpsuit suitable for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 20,
    "slug": "cool-jumpsuit",
    "filters": [
      {
        category_id: 1,
        filter_id: 1,
        filter_name: "color",
        option: "red"
      }
    ],
    "category": {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
      slug: "loungewear",
    },
    "variant_option": "size",
    "variants": [
      {
        sku: "small-shirt",
        variant_option: "small",
        price: 20,
        image: null
      },
      {
        sku: "medium-shirt",
        variant_option: "medium",
        price: 30,
        image: null
      },
      {
        sku: "large-shirt",
        variant_option: "large",
        price: 40,
        image: null
      },
    ]

  },
  {
    "id": 2,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a364b2e6-f179-49f4-a401-6b8e68a42432/pegasus-40-womens-road-running-shoes-L80k6C.png",
    "name": "Nike Air Max 1",
    "description": "A trendy denim jumpsuit that combines style and comfort. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 25,
    "slug": "denim-jumpsuit",
    "variant_option": "color",
    "variants": [
      {
        id: 1,
        variant_option: "blue",
        sku: "blue-shirt",
        price: 23,
        image: null
      }
    ]
  },
  {
    "id": 3,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a18d708-1dd3-4af9-98fe-f32288c3654a/free-metcon-5-womens-workout-shoes-h4Zl5h.png",
    "name": "Nike Metcon 9",
    "description": "A sophisticated and elegant dress for special occasions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 30,
    "slug": "elegant-dress"
  },
  {
    "id": 4,
    "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/blazer-mid-77-womens-shoes-NPWfjm.png",
    "name": "Nike Blazer Mid '77",
    "description": "A pair of stylish glasses to enhance your look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 15,
    "slug": "stylish-glasses"
  },
  {
    "id": 5,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/blazer-mid-77-womens-shoes-NPWfjm.png",
    "name": "Nike Blazer Mid '77",
    "description": "A pair of stylish glasses to enhance your look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 15,
    "slug": "stylish-glasses"
  },
  {
    "id": 6,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14385617-4d3f-4a7c-8478-ddd138ef4d22/dunk-low-retro-mens-shoes-J80m7m.png",
    "name": "Air Jordan 3 Fear",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 210,
    "slug": "dunk-low-retro-mens-shoes-J80m7m"
  },
  {
    "id": 7,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d23d7450-c5ea-4733-bc20-3bb599cedb2d/air-force-1-07-mens-shoes-GNxP0v.png",
    "name": "Air Jordan 4 Craft Olive",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 210,
    "slug": "air-force-1-07-mens-shoes-GNxP0v"
  },
  {
    "id": 8,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f1a997c-d081-44b3-b99f-694eaea6a5de/blazer-mid-77-mens-shoes-x7m822.png",
    "name": "Air Jordan 13 Wheat",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 200,
    "slug": "blazer-mid-77-mens-shoes-x7m822"
  },
  {
    "id": 9,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/08f904d1-dedb-4260-952d-8ac3c31ebad0/dunk-low-retro-premium-mens-shoes-20hjNd.png",
    "name": "Air Jordan 8 Winterized",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 150,
    "slug": "dunk-low-retro-premium-mens-shoes-20hjNd"
  },
  {
    "id": 10,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png",
    "name": "Air Jordan 1 High OG",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 180,
    "slug": "air-max-270-mens-shoes-KkLcGR"
  },


  {
    "id": 11,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bd2e5a6c-287f-431b-af24-4f64d11e0220/vomero-5-mens-shoes-MgsTqZ.png",
    "name": "Nike Dunk High Etro SE",
    "description": "A sophisticated and elegant dress for special occasions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 140,
    "slug": "nike-dunk-high-etro-se"
  },
  {
    "id": 12,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bb9be77e-e808-4d58-88db-5ad331c0b4ac/sabrina-1-west-coast-roots-basketball-shoes-f8jr2H.png",
    "name": "Nike Air More Uptempo 96",
    "description": "A pair of stylish glasses to enhance your look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 153.97,
    "slug": "nike-air-more-uptempo-96"
  },
  {
    "id": 13,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e1d6979-98ef-4240-8f9c-4daa7dddce16/vaporfly-3-mens-road-racing-shoes-8DD182.png",
    "name": "KD16",
    "description": "A vintage chill cap for a laid-back and cool look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 22,
    "slug": "kd-16"
  },
  {
    "id": 14,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/77a9570a-f734-4050-82e1-b422da3be7ad/dunk-high-retro-se-mens-shoes-9dMJ92.png",
    "name": "Tiger Woods 13",
    "description": "A fashionable jacket to elevate your style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 250,
    "slug": "tiger-woods-13"
  },
  {
    "id": 15,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6161f39-7584-44da-88a4-e7b2bb86d441/kd16-basketball-shoes-H3gcDG.png",
    "name": "Air Jordan 13 Wheat",
    "description": "A fashionable jacket to elevate your style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 200,
    "slug": "air-jordan-13-wheat"
  }

]

export const popularProducts = [
  {
    "id": 1,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/349d779a-6d86-4982-9c0f-93f979038cc4/court-vision-low-next-nature-womens-shoes-ZkMMBG.png",
    "name": "Nike Court Vision Low Next Nature",
    "description": "A stylish and comfortable jumpsuit suitable for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 20,
    "slug": "cool-jumpsuit",
    "filters": [
      {
        category_id: 1,
        filter_id: 1,
        filter_name: "color",
        option: "red"
      }
    ],
    "category": {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
      slug: "loungewear",
    },
    "variant_option": "size",
    "variants": [
      {
        sku: "small-shirt",
        variant_option: "small",
        price: 20,
        image: null
      },
      {
        sku: "medium-shirt",
        variant_option: "medium",
        price: 30,
        image: null
      },
      {
        sku: "large-shirt",
        variant_option: "large",
        price: 40,
        image: null
      },
    ]

  },
  {
    "id": 2,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a364b2e6-f179-49f4-a401-6b8e68a42432/pegasus-40-womens-road-running-shoes-L80k6C.png",
    "name": "Nike Air Max 1",
    "description": "A trendy denim jumpsuit that combines style and comfort. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 25,
    "slug": "denim-jumpsuit",
    "variant_option": "color",
    "variants": [
      {
        id: 1,
        variant_option: "blue",
        sku: "blue-shirt",
        price: 23,
        image: null
      }
    ]
  },
  {
    "id": 3,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a18d708-1dd3-4af9-98fe-f32288c3654a/free-metcon-5-womens-workout-shoes-h4Zl5h.png",
    "name": "Nike Metcon 9",
    "description": "A sophisticated and elegant dress for special occasions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 30,
    "slug": "elegant-dress"
  },
  {
    "id": 4,
    "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/blazer-mid-77-womens-shoes-NPWfjm.png",
    "name": "Nike Blazer Mid '77",
    "description": "A pair of stylish glasses to enhance your look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 15,
    "slug": "stylish-glasses"
  },
  {
    "id": 5,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/blazer-mid-77-womens-shoes-NPWfjm.png",
    "name": "Nike Blazer Mid '77",
    "description": "A pair of stylish glasses to enhance your look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 15,
    "slug": "stylish-glasses"
  }
]

export const latestProducts = [
  {
    "id": 1,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14385617-4d3f-4a7c-8478-ddd138ef4d22/dunk-low-retro-mens-shoes-J80m7m.png",
    "name": "Air Jordan 3 Fear",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 210,
    "slug": "dunk-low-retro-mens-shoes-J80m7m"
  },
  {
    "id": 2,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d23d7450-c5ea-4733-bc20-3bb599cedb2d/air-force-1-07-mens-shoes-GNxP0v.png",
    "name": "Air Jordan 4 Craft Olive",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 210,
    "slug": "air-force-1-07-mens-shoes-GNxP0v"
  },
  {
    "id": 3,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f1a997c-d081-44b3-b99f-694eaea6a5de/blazer-mid-77-mens-shoes-x7m822.png",
    "name": "Air Jordan 13 Wheat",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 200,
    "slug": "blazer-mid-77-mens-shoes-x7m822"
  },
  {
    "id": 4,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/08f904d1-dedb-4260-952d-8ac3c31ebad0/dunk-low-retro-premium-mens-shoes-20hjNd.png",
    "name": "Air Jordan 8 Winterized",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 150,
    "slug": "dunk-low-retro-premium-mens-shoes-20hjNd"
  },
  {
    "id": 5,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png",
    "name": "Air Jordan 1 High OG",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 180,
    "slug": "air-max-270-mens-shoes-KkLcGR"
  }
]

export const discountedProducts = [

  {
    "id": 1,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bd2e5a6c-287f-431b-af24-4f64d11e0220/vomero-5-mens-shoes-MgsTqZ.png",
    "name": "Nike Dunk High Etro SE",
    "description": "A sophisticated and elegant dress for special occasions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 140,
    "slug": "nike-dunk-high-etro-se"
  },
  {
    "id": 2,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bb9be77e-e808-4d58-88db-5ad331c0b4ac/sabrina-1-west-coast-roots-basketball-shoes-f8jr2H.png",
    "name": "Nike Air More Uptempo 96",
    "description": "A pair of stylish glasses to enhance your look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 153.97,
    "slug": "nike-air-more-uptempo-96"
  },
  {
    "id": 3,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e1d6979-98ef-4240-8f9c-4daa7dddce16/vaporfly-3-mens-road-racing-shoes-8DD182.png",
    "name": "KD16",
    "description": "A vintage chill cap for a laid-back and cool look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 22,
    "slug": "kd-16"
  },
  {
    "id": 4,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/77a9570a-f734-4050-82e1-b422da3be7ad/dunk-high-retro-se-mens-shoes-9dMJ92.png",
    "name": "Tiger Woods 13",
    "description": "A fashionable jacket to elevate your style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 250,
    "slug": "tiger-woods-13"
  },
  {
    "id": 5,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6161f39-7584-44da-88a4-e7b2bb86d441/kd16-basketball-shoes-H3gcDG.png",
    "name": "Air Jordan 13 Wheat",
    "description": "A fashionable jacket to elevate your style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 200,
    "slug": "air-jordan-13-wheat"
  }
]


export const cartItems = [
  {
    product_id: 93813718293,
    variant_option: "37.5",
    sku: "black-joggers",
    quantity: 1,
  },
  {
    product_id: 93813718294,
    variant_option: "M",
    sku: "medium-shirt",
    quantity: 2,
  }
]

export const cart = {
  "total_unique_items": 2,
  "line_items": [
    {
      "product": {
        "id": 93813718293,
        "name": "JESSIE THUNDER SHOES",
        "variant_option": "size"
      },
      "variant": {
        "variant_option": "37.5",
        "price": 30,
        "image": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
        "sku": "black-joggers"
      },
      "quantity": 1,
      "subtotal": 30,
      "discount": 10,
      "dicount_amount": 3,
      "tax": 16,
      "tax_amount": 5,
      "grand_total": 32
    },
    {
      "product": {
        "id": 93813718294,
        "name": "HAKURA T-SHIRT",
        "variant_option": "size"
      },
      "variant": {
        "variant_option": "M",
        "price": 20,
        "image": "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
        "sku": "medium-shirt"
      },
      "quantity": 2,
      "subtotal": 40,
      "discount": 10,
      "dicount_amount": 4,
      "tax": 16,
      "tax_amount": 6,
      "grand_total": 43
    }
  ],
  "cart_summary": {
    "subtotal": 70,
    "discount": 10,
    "discount_amount": 7,
    "tax": 16,
    "tax_amount": 10,
    "grand_total": 73,
  }
}