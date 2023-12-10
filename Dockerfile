FROM khaqan/ecommerce-frontend:base

COPY . .

CMD ["yarn", "start"]