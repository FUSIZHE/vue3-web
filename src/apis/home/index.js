// 获取数据
export const reqOptList = () => {
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: [
        {
          title:"图层",
          icon:"#icon-tuceng"
        },
        {
          title:"放大",
          icon:"#icon-fangda"
        },
        {
          title:"缩小",
          icon:"#icon-zhongxinsuoxiao-suoxiaojinru"
        },
        {
          title:"钉住",
          icon:"#icon-svgtubiao1-02"
        },
        {
          title:"过滤",
          icon:"#icon-guolvtiaojian"
        }

      ]
    });
  });
};