### 启动
npm start

### 依赖框架或插件
- [nest.js](https://nestjs.com/)
- [day.js](https://dayjs.gitee.io/zh-CN/)
- [lodash.js](https://www.lodashjs.com/)

### 接口
- 查询（post）：127.0.0.1:3000/api/user/query
  - 入参：pageSize(条数)，pageNum（页码）
  - 成功出参：{code:200,msg:'查询成功'}
  - 失败出参：{code:400,msg:'查询失败'}

- 新增（post）：127.0.0.1:3000/api/user/add
  - 入参：name,age,sex,interst
  - 成功出参：{code:200,msg:'添加成功'}
  - 失败出参：{code:400,msg:'添加失败'}

- 修改（post）：127.0.0.1:3000/api/user/edit
  - 入参：id,name,age,sex,interst
  - 成功出参：{code:200,msg:'修改成功'}
  - 失败出参：{code:400,msg:'修改失败'}

- 删除（post）：127.0.0.1:3000/api/user/del
  - 入参：id
  - 成功出参：{code:200,msg:'删除成功'}
  - 失败出参：{code:400,msg:'删除失败'}
