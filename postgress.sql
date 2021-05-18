/*
 Navicat Premium Data Transfer

 Source Server         : POSTGRESQL - DESENV
 Source Server Type    : PostgreSQL
 Source Server Version : 130002
 Source Host           : 192.168.100.84:49153
 Source Catalog        : teste_postgresql
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130002
 File Encoding         : 65001

 Date: 18/05/2021 13:33:23
*/


-- ----------------------------
-- Table structure for categorias
-- ----------------------------
DROP TABLE IF EXISTS "public"."categorias";
CREATE TABLE "public"."categorias" (
  "id" int4 NOT NULL,
  "codigo" varchar(255) COLLATE "pg_catalog"."default",
  "titulo" varchar(255) COLLATE "pg_catalog"."default",
  "status" int2
)
;

-- ----------------------------
-- Records of categorias
-- ----------------------------

-- ----------------------------
-- Table structure for estoque
-- ----------------------------
DROP TABLE IF EXISTS "public"."estoque";
CREATE TABLE "public"."estoque" (
  "id" int4 NOT NULL,
  "idProduto" int4 NOT NULL,
  "quantidade" int4 NOT NULL,
  "reserva" int4 NOT NULL,
  "status" int4 NOT NULL
)
;

-- ----------------------------
-- Records of estoque
-- ----------------------------

-- ----------------------------
-- Table structure for produtos
-- ----------------------------
DROP TABLE IF EXISTS "public"."produtos";
CREATE TABLE "public"."produtos" (
  "id" int4 NOT NULL,
  "idCategoria" int4 NOT NULL,
  "codigo" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nome" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descricao" text COLLATE "pg_catalog"."default" NOT NULL,
  "valor" numeric NOT NULL,
  "status" int2 NOT NULL
)
;

-- ----------------------------
-- Records of produtos
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table categorias
-- ----------------------------
ALTER TABLE "public"."categorias" ADD CONSTRAINT "categorias_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table estoque
-- ----------------------------
ALTER TABLE "public"."estoque" ADD CONSTRAINT "estoque_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table produtos
-- ----------------------------
ALTER TABLE "public"."produtos" ADD CONSTRAINT "produtos_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table estoque
-- ----------------------------
ALTER TABLE "public"."estoque" ADD CONSTRAINT "fk" FOREIGN KEY ("idProduto") REFERENCES "public"."produtos" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table produtos
-- ----------------------------
ALTER TABLE "public"."produtos" ADD CONSTRAINT "fk" FOREIGN KEY ("idCategoria") REFERENCES "public"."categorias" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
