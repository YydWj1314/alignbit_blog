CREATE DATABASE  IF NOT EXISTS `align_bit_blog` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sky_take_out`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: align_bit_blog
-- ------------------------------------------------------
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user`
(
    `id`          bigint                 NOT NULL AUTO_INCREMENT COMMENT '主键',
    `username`    varchar(32) COLLATE utf8_bin    DEFAULT NULL COMMENT '用户',
    `real_name`   varchar(32) COLLATE utf8_bin    DEFAULT NULL COMMENT '真实姓名',
    `sex`         varchar(16) COLLATE utf8_bin    DEFAULT NULL COMMENT '性别',
    `email`       varchar(64) COLLATE utf8_bin    DEFAULT NULL COMMENT '邮箱',
    `password`    varchar(64) COLLATE utf8_bin    DEFAULT NULL COMMENT '密码',
    `role`        ENUM ('user', 'admin') NOT NULL DEFAULT 'user' COMMENT '权限',
    `create_time` datetime                        DEFAULT NULL COMMENT '创建时间',
    `status`      int                    NOT NULL DEFAULT '1' COMMENT '状态 0:禁用，1:启用',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 4   -- 3 admin， user start from 4
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8_bin COMMENT ='用户信息';
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `blog`
--
DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE blog
(
    id             BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '文章ID',
    title          VARCHAR(255)                            NOT NULL COMMENT '文章标题',
    content        TEXT                                    NOT NULL COMMENT '文章内容（Markdown / HTML）',
    author_id      BIGINT                                  NOT NULL COMMENT '作者ID（外键关联 users.id）',
    category_id    BIGINT                                           DEFAULT NULL COMMENT '分类ID（外键关联 categories.id）',
    tags           VARCHAR(255)                                     DEFAULT NULL COMMENT '文章标签（逗号分隔，如 "技术,前端"）',
    cover_image    VARCHAR(255)                                     DEFAULT NULL COMMENT '封面图片URL',
    status         ENUM ('draft', 'published', 'archived') NOT NULL DEFAULT 'draft' COMMENT '文章状态',
    views          INT                                     NOT NULL DEFAULT 0 COMMENT '阅读量',
    likes          INT                                     NOT NULL DEFAULT 0 COMMENT '点赞数',
    comments_count INT                                     NOT NULL DEFAULT 0 COMMENT '评论数',
    created_time   datetime                                         DEFAULT NULL COMMENT '创建时间',
    updated_time   datetime                                         DEFAULT NULL COMMENT '更新时间',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci COMMENT ='博客文章表';
/*!40101 SET character_set_client = @saved_cs_client */;




/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-06 15:07:08
