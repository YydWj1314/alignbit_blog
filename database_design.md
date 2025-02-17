alignbit 数据库设计文档

| order | chart name | chinese name |
| ----- | ---------- | ------------ |
| 1     |            |              |
| 2     |            |              |
| 3     |            |              |
|       |            |              |
|       |            |              |
|       |            |              |
|       |            |              |
|       |            |              |
|       |            |              |

## 1. user

user表为用户表，储存 管理员 + 用户信息

采用 权限字段来区分 管理员（ADMIN） 和 普通用户(USER)

| 字段名    | 数据类型              | 说明     | 备注        |
| --------- | --------------------- | -------- | ----------- |
| id        | bigint                | 主键     | 自增        |
| username  | varchar(32)           | 昵称     | 唯一        |
| real_name | varchar(32)           | 真实姓名 |             |
| sex       | varchar(2)            | 性别     |             |
| email     | varchar(64)           | 注册邮箱 |             |
| password  | varchar(64)           | 密码     |             |
| role      | ENUM('USER', 'ADMIN') | 权限标识 | 1 0         |
| status    | int                   | 账号状态 | 1正常 0锁定 |
|           |                       |          |             |

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(32) UNIQUE NOT NULL,
    realname VARCHAR(32) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    role ENUM('USER', 'ADMIN') DEFAULT 'USER'
);
```

