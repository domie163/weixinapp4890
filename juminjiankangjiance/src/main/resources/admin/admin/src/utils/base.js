const base = {
    get() {
        return {
            url : "http://localhost:8080/juminjiankangjiance/",
            name: "juminjiankangjiance",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/juminjiankangjiance/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "居民健康监测系统"
        } 
    }
}
export default base
