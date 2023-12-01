export const sliderItems = [
  {
    id: 1,
    img: "https://stat4.bollywoodhungama.in/wp-content/uploads/2017/10/Anushka-Sharma-launches-her-own-signature-apparel-line-NUSH-11.jpg",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

export const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "SHIRT STYLE",
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
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "LOUNGEWEAR LOVE",
    slug: "loungewear"
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "LIGHT JACKETS",
    slug: "light-jackets"
  },
];

export const popularProducts = [
  {
    "id": 1,
    "img": "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    "name": "Cool Jumpsuit",
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
    "img": "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12.png",
    "name": "Denim Jumpsuit",
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
    "img": "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    "name": "Elegant Dress",
    "description": "A sophisticated and elegant dress for special occasions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 30,
    "slug": "elegant-dress"
  },
  {
    "id": 4,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glasses.png/1200px-Glasses.png",
    "name": "Stylish Glasses",
    "description": "A pair of stylish glasses to enhance your look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 15,
    "slug": "stylish-glasses"
  },
  {
    "id": 5,
    "img": "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    "name": "Trendy Tote Bag",
    "description": "A trendy tote bag to carry your essentials with style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 18,
    "slug": "trendy-tote-bag"
  },
  {
    "id": 6,
    "img": "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    "name": "Vintage Chill Cap",
    "description": "A vintage chill cap for a laid-back and cool look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 22,
    "slug": "vintage-chill-cap"
  },
  {
    "id": 7,
    "img": "https://pngimg.com/d/sweater_PNG50.png",
    "name": "Cozy Sweater",
    "description": "A cozy sweater to keep you warm in style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 28,
    "slug": "cozy-sweater"
  },
  {
    "id": 8,
    "img": "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    "name": "Fashionable Jacket",
    "description": "A fashionable jacket to elevate your style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    "price": 35,
    "slug": "fashionable-jacket"
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