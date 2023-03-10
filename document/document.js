const docoptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentacion Api-rest",
      version: "1.0",
    },
    servers: [
      {
        //url: "http://localhost:3000",
        url: "https://cloudproductsimages-production.up.railway.app",
        description: "url servidor",
      },
    ],
    //components
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
        cookieAuth: {
          type: "apiKey",
          name: "refreshToken",
          in: "cookie",
        },
      },
      schemas: {
        tb_categorias: {
          type: "object",
          required: ["nombre"],
          properties: {
            nombre: {
              type: "string",
              description: "nombre de categoria",
              example: "Sony",
            },
          },
        },
        tb_products: {
          type: "object",
          required: ["nombre", "descripcion", "precio", "rating", "categoria"],
          properties: {
            nombre: {
              type: "string",
              description: "nombre del producto",
              example: "Sony de 77 pulgadas",
            },
            descripcion: {
              type: "string",
              description: "descripcion del producto",
              example: "Excelente televisor 8k con tecnologia sound max modelo x7g",
            },
            precio: {
              type: "integer",
              description: "precio del producto",
              example: 1500,
            },
            rating: {
              type: "integer",
              description: "rating del producto",
              example: 5,
            },
            category  : {
              type: "string",
              description: "Object Id de una categoria valida y existente",
              example: "63ac71299425217fc7c9d025",
            },
            image:{
              type: "string",
              example: null
            }
          },
        }
        ,
      },
    },
  },
  //apis
  apis: ["./routes/*.js"],
};

export default docoptions;
