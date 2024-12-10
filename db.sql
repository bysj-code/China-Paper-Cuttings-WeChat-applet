/*
SQLyog Ultimate v11.3 (64 bit)
MySQL - 5.7.32-log : Database - zhongguojianzhi
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`zhongguojianzhi` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `zhongguojianzhi`;

/*Table structure for table `address` */

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主键 ',
  `yonghu_id` int(20) NOT NULL COMMENT '创建用户',
  `address_name` varchar(200) NOT NULL COMMENT '收货人 ',
  `address_phone` varchar(200) NOT NULL COMMENT '电话 ',
  `address_dizhi` varchar(200) NOT NULL COMMENT '地址 ',
  `isdefault_types` int(11) NOT NULL COMMENT '是否默认地址 ',
  `insert_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间 show3',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='收货地址';

/*Data for the table `address` */

insert  into `address`(`id`,`yonghu_id`,`address_name`,`address_phone`,`address_dizhi`,`isdefault_types`,`insert_time`,`update_time`,`create_time`) values (1,1,'收货人1','17703786901','地址1',1,'2022-03-23 21:26:56','2022-03-23 21:26:56','2022-03-23 21:26:56'),(2,2,'收货人2','17703786902','地址2',1,'2022-03-23 21:26:56','2022-03-23 21:26:56','2022-03-23 21:26:56'),(3,1,'收货人3','17703786903','地址3',1,'2022-03-23 21:26:56','2022-03-23 21:26:56','2022-03-23 21:26:56'),(4,2,'收货人4','17703786904','地址4',1,'2022-03-23 21:26:56','2022-03-23 21:26:56','2022-03-23 21:26:56'),(5,3,'收货人5','17703786905','地址5',1,'2022-03-23 21:26:56','2022-03-23 21:26:56','2022-03-23 21:26:56');

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `yonghu_id` int(11) DEFAULT NULL COMMENT '所属用户',
  `goods_id` int(11) DEFAULT NULL COMMENT '商品',
  `buy_number` int(11) DEFAULT NULL COMMENT '购买数量',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '添加时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='购物车';

/*Data for the table `cart` */

/*Table structure for table `config` */

DROP TABLE IF EXISTS `config`;

CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='配置文件';

/*Data for the table `config` */

insert  into `config`(`id`,`name`,`value`) values (1,'轮播图1','http://localhost:8080/zhongguojianzhi/upload/config1.jpg'),(2,'轮播图2','http://localhost:8080/zhongguojianzhi/upload/config2.jpg'),(3,'轮播图3','http://localhost:8080/zhongguojianzhi/upload/config3.jpg');

/*Table structure for table `dictionary` */

DROP TABLE IF EXISTS `dictionary`;

CREATE TABLE `dictionary` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `dic_code` varchar(200) DEFAULT NULL COMMENT '字段',
  `dic_name` varchar(200) DEFAULT NULL COMMENT '字段名',
  `code_index` int(11) DEFAULT NULL COMMENT '编码',
  `index_name` varchar(200) DEFAULT NULL COMMENT '编码名字  Search111 ',
  `super_id` int(11) DEFAULT NULL COMMENT '父字段id',
  `beizhu` varchar(200) DEFAULT NULL COMMENT '备注',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='字典';

/*Data for the table `dictionary` */

insert  into `dictionary`(`id`,`dic_code`,`dic_name`,`code_index`,`index_name`,`super_id`,`beizhu`,`create_time`) values (1,'isdefault_types','是否默认地址',1,'否',NULL,NULL,'2022-03-23 21:26:47'),(2,'isdefault_types','是否默认地址',2,'是',NULL,NULL,'2022-03-23 21:26:47'),(3,'shangxia_types','上下架',1,'上架',NULL,NULL,'2022-03-23 21:26:47'),(4,'shangxia_types','上下架',2,'下架',NULL,NULL,'2022-03-23 21:26:47'),(5,'goods_types','商品类型',1,'商品类型1',NULL,NULL,'2022-03-23 21:26:47'),(6,'goods_types','商品类型',2,'商品类型2',NULL,NULL,'2022-03-23 21:26:47'),(7,'goods_types','商品类型',3,'商品类型3',NULL,NULL,'2022-03-23 21:26:47'),(8,'jianzhishipin_types','视频类型',1,'视频类型1',NULL,NULL,'2022-03-23 21:26:47'),(9,'jianzhishipin_types','视频类型',2,'视频类型2',NULL,NULL,'2022-03-23 21:26:47'),(10,'jianzhishipin_types','视频类型',3,'视频类型3',NULL,NULL,'2022-03-23 21:26:47'),(11,'goods_order_types','订单类型',1,'已支付',NULL,NULL,'2022-03-23 21:26:47'),(12,'goods_order_types','订单类型',2,'退款',NULL,NULL,'2022-03-23 21:26:47'),(13,'goods_order_types','订单类型',3,'已发货',NULL,NULL,'2022-03-23 21:26:47'),(14,'goods_order_types','订单类型',4,'已收货',NULL,NULL,'2022-03-23 21:26:47'),(15,'goods_order_payment_types','订单支付类型',1,'现金',NULL,NULL,'2022-03-23 21:26:47'),(16,'sex_types','性别类型',1,'男',NULL,NULL,'2022-03-23 21:26:47'),(17,'sex_types','性别类型',2,'女',NULL,NULL,'2022-03-23 21:26:47'),(18,'news_types','剪纸历史类型',1,'剪纸历史类型1',NULL,NULL,'2022-03-23 21:26:47'),(19,'news_types','剪纸历史类型',2,'剪纸历史类型2',NULL,NULL,'2022-03-23 21:26:47');

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键 ',
  `goods_name` varchar(200) DEFAULT NULL COMMENT '商品名称  Search111 ',
  `goods_photo` varchar(200) DEFAULT NULL COMMENT '商品照片',
  `goods_types` int(11) DEFAULT NULL COMMENT '商品类型 Search111',
  `goods_kucun_number` int(11) DEFAULT NULL COMMENT '商品库存',
  `goods_old_money` decimal(10,2) DEFAULT NULL COMMENT '商品原价 ',
  `goods_new_money` decimal(10,2) DEFAULT NULL COMMENT '现价',
  `goods_clicknum` int(11) DEFAULT NULL COMMENT '点击次数 ',
  `shangxia_types` int(11) DEFAULT NULL COMMENT '是否上架 ',
  `goods_delete` int(11) DEFAULT NULL COMMENT '逻辑删除',
  `goods_content` text COMMENT '商品简介 ',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间  show1 show2 photoShow',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='商品';

/*Data for the table `goods` */

insert  into `goods`(`id`,`goods_name`,`goods_photo`,`goods_types`,`goods_kucun_number`,`goods_old_money`,`goods_new_money`,`goods_clicknum`,`shangxia_types`,`goods_delete`,`goods_content`,`create_time`) values (1,'商品名称1','http://localhost:8080/zhongguojianzhi/upload/goods1.jpg',2,99,'501.01','68.11',486,1,1,'商品简介1','2022-03-23 21:26:56'),(2,'商品名称2','http://localhost:8080/zhongguojianzhi/upload/goods2.jpg',3,102,'554.67','275.59',178,1,1,'商品简介2','2022-03-23 21:26:56'),(3,'商品名称3','http://localhost:8080/zhongguojianzhi/upload/goods3.jpg',3,102,'690.74','471.55',358,1,1,'商品简介3','2022-03-23 21:26:56'),(4,'商品名称4','http://localhost:8080/zhongguojianzhi/upload/goods4.jpg',3,103,'584.05','419.61',449,1,1,'商品简介4','2022-03-23 21:26:56'),(5,'商品名称5','http://localhost:8080/zhongguojianzhi/upload/goods5.jpg',1,104,'906.05','240.69',231,1,1,'商品简介5','2022-03-23 21:26:56');

/*Table structure for table `goods_order` */

DROP TABLE IF EXISTS `goods_order`;

CREATE TABLE `goods_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `goods_order_uuid_number` varchar(200) DEFAULT NULL COMMENT '订单号',
  `address_id` int(11) DEFAULT NULL COMMENT '收货地址 ',
  `goods_id` int(11) DEFAULT NULL COMMENT '商品',
  `yonghu_id` int(11) DEFAULT NULL COMMENT '用户',
  `buy_number` int(11) DEFAULT NULL COMMENT '购买数量',
  `goods_order_true_price` decimal(10,2) DEFAULT NULL COMMENT '实付价格',
  `goods_order_types` int(11) DEFAULT NULL COMMENT '订单类型',
  `goods_order_payment_types` int(11) DEFAULT NULL COMMENT '支付类型',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '订单创建时间',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间 show3',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='商品订单';

/*Data for the table `goods_order` */

insert  into `goods_order`(`id`,`goods_order_uuid_number`,`address_id`,`goods_id`,`yonghu_id`,`buy_number`,`goods_order_true_price`,`goods_order_types`,`goods_order_payment_types`,`insert_time`,`create_time`) values (1,'1648042617502',1,1,1,1,'68.11',4,1,'2022-03-23 21:36:58','2022-03-23 21:36:58'),(2,'1648042799639',1,3,1,1,'471.55',1,1,'2022-03-23 21:40:00','2022-03-23 21:40:00'),(3,'1648042799639',1,1,1,1,'68.11',4,1,'2022-03-23 21:40:00','2022-03-23 21:40:00'),(4,'1648042963242',3,4,1,1,'419.61',1,1,'2022-03-23 21:42:43','2022-03-23 21:42:43'),(5,'1648042963242',3,5,1,1,'240.69',1,1,'2022-03-23 21:42:43','2022-03-23 21:42:43');

/*Table structure for table `jianzhishipin` */

DROP TABLE IF EXISTS `jianzhishipin`;

CREATE TABLE `jianzhishipin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键 ',
  `jianzhishipin_name` varchar(200) DEFAULT NULL COMMENT '视频名称  Search111 ',
  `jianzhishipin_photo` varchar(200) DEFAULT NULL COMMENT '视频封面',
  `jianzhishipin_video` varchar(200) DEFAULT NULL COMMENT '视频',
  `jianzhishipin_types` int(11) DEFAULT NULL COMMENT '视频类型 Search111',
  `jianzhishipin_clicknum` int(11) DEFAULT NULL COMMENT '点击次数 ',
  `jianzhishipin_delete` int(11) DEFAULT NULL COMMENT '逻辑删除',
  `jianzhishipin_content` text COMMENT '视频简介 ',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间  show1 show2 photoShow',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='剪纸教学视频';

/*Data for the table `jianzhishipin` */

insert  into `jianzhishipin`(`id`,`jianzhishipin_name`,`jianzhishipin_photo`,`jianzhishipin_video`,`jianzhishipin_types`,`jianzhishipin_clicknum`,`jianzhishipin_delete`,`jianzhishipin_content`,`create_time`) values (1,'视频名称1','http://localhost:8080/zhongguojianzhi/upload/1648042365775.jpg','http://localhost:8080/zhongguojianzhi/upload/video.mp4',1,216,1,'<p>视频简介1</p>','2022-03-23 21:26:56'),(2,'视频名称2','http://localhost:8080/zhongguojianzhi/upload/1648042358428.jpg','http://localhost:8080/zhongguojianzhi/upload/video.mp4',1,450,1,'<p>视频简介2</p>','2022-03-23 21:26:56'),(3,'视频名称3','http://localhost:8080/zhongguojianzhi/upload/1648042350768.jpg','http://localhost:8080/zhongguojianzhi/upload/video.mp4',2,309,1,'<p>视频简介3</p>','2022-03-23 21:26:56'),(4,'视频名称4','http://localhost:8080/zhongguojianzhi/upload/1648042343123.jpg','http://localhost:8080/zhongguojianzhi/upload/video.mp4',2,187,1,'<p>视频简介4</p>','2022-03-23 21:26:56'),(5,'视频名称5','http://localhost:8080/zhongguojianzhi/upload/1648042333832.jpg','http://localhost:8080/zhongguojianzhi/upload/video.mp4',1,231,1,'<p>视频简介5</p>','2022-03-23 21:26:56');

/*Table structure for table `news` */

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键 ',
  `news_name` varchar(200) DEFAULT NULL COMMENT '剪纸历史标题 Search111  ',
  `news_photo` varchar(200) DEFAULT NULL COMMENT '剪纸历史图片 ',
  `news_types` int(11) NOT NULL COMMENT '剪纸历史类型 Search111',
  `news_content` text COMMENT '剪纸历史详情 ',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间 show1 show2 nameShow',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='剪纸历史';

/*Data for the table `news` */

insert  into `news`(`id`,`news_name`,`news_photo`,`news_types`,`news_content`,`create_time`) values (1,'剪纸历史标题1','http://localhost:8080/zhongguojianzhi/upload/news1.jpg',2,'剪纸历史详情1','2022-03-23 21:26:56'),(2,'剪纸历史标题2','http://localhost:8080/zhongguojianzhi/upload/news2.jpg',2,'剪纸历史详情2','2022-03-23 21:26:56'),(3,'剪纸历史标题3','http://localhost:8080/zhongguojianzhi/upload/news3.jpg',2,'剪纸历史详情3','2022-03-23 21:26:56'),(4,'剪纸历史标题4','http://localhost:8080/zhongguojianzhi/upload/news4.jpg',1,'剪纸历史详情4','2022-03-23 21:26:56'),(5,'剪纸历史标题5','http://localhost:8080/zhongguojianzhi/upload/news5.jpg',2,'剪纸历史详情5','2022-03-23 21:26:56');

/*Table structure for table `token` */

DROP TABLE IF EXISTS `token`;

CREATE TABLE `token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `tablename` varchar(100) DEFAULT NULL COMMENT '表名',
  `role` varchar(100) DEFAULT NULL COMMENT '角色',
  `token` varchar(200) NOT NULL COMMENT '密码',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  `expiratedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='token表';

/*Data for the table `token` */

insert  into `token`(`id`,`userid`,`username`,`tablename`,`role`,`token`,`addtime`,`expiratedtime`) values (1,1,'admin','users','管理员','2salalzkyszxtgq2jcndl9bkg18d5g4w','2022-03-23 21:25:15','2022-03-23 22:46:43'),(2,1,'a1','yonghu','用户','2hv4biy5y4j58hyw103xu47apmyugape','2022-03-23 21:31:46','2022-03-23 22:41:36');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `role` varchar(100) DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`role`,`addtime`) values (1,'admin','admin','管理员','2022-05-01 00:00:00');

/*Table structure for table `yonghu` */

DROP TABLE IF EXISTS `yonghu`;

CREATE TABLE `yonghu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(200) DEFAULT NULL COMMENT '账户',
  `password` varchar(200) DEFAULT NULL COMMENT '密码',
  `yonghu_name` varchar(200) DEFAULT NULL COMMENT '用户姓名 Search111 ',
  `yonghu_phone` varchar(200) DEFAULT NULL COMMENT '用户手机号',
  `yonghu_id_number` varchar(200) DEFAULT NULL COMMENT '用户身份证号',
  `yonghu_photo` varchar(200) DEFAULT NULL COMMENT '用户头像',
  `sex_types` int(11) DEFAULT NULL COMMENT '性别',
  `yonghu_email` varchar(200) DEFAULT NULL COMMENT '电子邮箱',
  `new_money` decimal(10,2) DEFAULT NULL COMMENT '余额 ',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户';

/*Data for the table `yonghu` */

insert  into `yonghu`(`id`,`username`,`password`,`yonghu_name`,`yonghu_phone`,`yonghu_id_number`,`yonghu_photo`,`sex_types`,`yonghu_email`,`new_money`,`create_time`) values (1,'a1','123456','用户姓名1','17703786901','410224199610232001','http://localhost:8080/zhongguojianzhi/upload/yonghu1.jpg',1,'1@qq.com','99358.09','2022-03-23 21:26:56'),(2,'a2','123456','用户姓名2','17703786902','410224199610232002','http://localhost:8080/zhongguojianzhi/upload/yonghu2.jpg',2,'2@qq.com','498.67','2022-03-23 21:26:56'),(3,'a3','123456','用户姓名3','17703786903','410224199610232003','http://localhost:8080/zhongguojianzhi/upload/yonghu3.jpg',2,'3@qq.com','467.99','2022-03-23 21:26:56');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
