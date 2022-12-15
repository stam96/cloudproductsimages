import { Router } from "express";
import {
  createProducts,
  deleteProductsId,
  getProducts,
  getProductsId,
  updateProductsId,
  cargarArchivoImg,
} from "../controllers/index.js";
import {
  validateProducts,
  isIDmongoProduct,
} from "../helpers/validation/index.js";
import { validationResultExpress } from "../middlewares/expressValidate/errorValidate.js";
import { accessFiles } from "../middlewares/fileload/requiredFileImage.js";
const router = Router();


/**
 * @swagger
 *  /api/v1/products/:
 *   post:
 *      tags: [tb_products]
 *      summary: creacion de nuevo producto 
 *      description: Añadir un nuevo producto 
 *      requestBody:        
 *          description: Crear un nuevo producto               
 *          content:               
 *              application/json:               
 *                  schema:               
 *                      $ref: "#components/schemas/tb_products"
 *          required: true
 *      consumes:
 *          - multipart/form-data
 *      parameters:
 *          - in: formData
 *            name: image
 *            format: binary
 *            type: string
 *            description: image
 *            schema:    
 *              type: file
 *              required: true
 *      responses:   
 *          "200":
 *              description: Producto creado correctamente
 *          "400":
 *              description: Producto ya existente    
 *          "500":
 *              description: Error interno del servidor.      
 *                          
 */
router.post(
  "/products",
  validateProducts,
  validationResultExpress,
  accessFiles,
  createProducts
);

/**
 * @swagger
 *  /api/v1/products/:
 *   get:
 *      tags: [tb_products]
 *      summary: Verificar todas los productos usando query params
 *      description: Ver categorias
 *      parameters:
 *          - in: query
 *            name: limit
 *            description: Ingreso del limit para determinar la cantidad de registro a obtener
 *            required: true
 *            schema:
 *              type: string
 *          - in: query
 *            name: desde
 *            description: Ingreso desde el punto de partida para obtener los registros
 *            schema:
 *              type: string
 *
 *      responses:
 *          "200":
 *              description: Productod visalizados correctamente.
 *
 *          "500":
 *              description: Error interno del servidor.
 *
 */
router.get("/products", getProducts);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *   get:
 *      summary: Buscar producto por id
 *      tags: [tb_products]
 *      description: Buscar producto por id
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Ingreso del id para buscar un producto
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        "200":
 *              description: Obteniendo producto id
 *
 *        "400":
 *              description: Debe ser un MongoId valido
 *        "500":
 *              description: Error interno del servidor.
 *
 */
router.get(
  "/products/:id",
  isIDmongoProduct,
  validationResultExpress,
  getProductsId
);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *   delete:
 *      summary: Eliminar un producto por id
 *      tags: [tb_products]
 *      description: Eliminar un producto por id
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Ingreso del id a eliminar producto
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        "200":
 *              description: Producto eliminado correctamente.
 *        "400":
 *              description: Debe ser un MongoId valido.
 *        "500":
 *              description: Error interno del servidor.
 *
 */
router.delete(
  "/products/:id",
  isIDmongoProduct,
  validationResultExpress,
  deleteProductsId
);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *   put:
 *      summary: Actualizar un producto por id
 *      tags: [tb_products]
 *      description: Actualizar un producto por id
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Ingreso del id producto para actualizar
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *        required: true
 *        description: Actualizar un producto
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 $ref: "#components/schemas/tb_products"
 *      responses:
 *        "200":
 *              description: Producto actualizado correctamente.
 *
 *        "400":
 *              description: Debe un IdMongo valido.
 *
 *        "500":
 *              description: Error interno del servidor.
 *
 */
router.put(
  "/products/:id",
  isIDmongoProduct,
  validationResultExpress,
  accessFiles,
  updateProductsId
);

router.post("/upload", accessFiles, cargarArchivoImg);
export { router };
