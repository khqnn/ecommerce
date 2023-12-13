export const defaultThemeSettings = {
  "business_id": 1,
  "name": "lama",
  "logo": "https://themewagon.com/wp-content/uploads/2021/03/Frame-172-1.png",
  "margin": "margin-large",
  "menu_items": [
    {
      "title": "Home",
      "path": "/"
    },
    {
      "title": "Men",
      "path": null,
      "categories": [
        {
          "title": "Jordan",
          "path": "/shop/jordan"
        },
        {
          "title": "LAMA",
          "path": "/shop/lama"
        },
        {
          "title": "Python",
          "path": "/shop/python"
        }
      ]
    },
    {
      "title": "Women",
      "path": null,
      "categories": [
        {
          "title": "Java",
          "path": "/shop/java"
        },
        {
          "title": "Cherry",
          "path": "/shop/cherry"
        },
        {
          "title": "Kitkat",
          "path": "/shop/kitkat"
        }
      ]
    },
    {
      "title": "Kids",
      "path": "/shop/kids"
    }
  ],

  "announcement_text": "Get free shipping upto $50",
  "announcement_background": "black",
  "header": {
    "id": "standard",
    "background_color_header": "white",
    "text_color_header": "black",
    "background_color_hover": "black",
    "text_color_hover": "white"
  },
  "slides": [
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
    }
  ]
}


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