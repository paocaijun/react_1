let getApi = url => `${window.config.context}/${url}`
export const MUSIC_DATA = getApi('music/datalist')
export const EDIT_DATA = getApi('xxx')
export const AREA_TREE = getApi('music/areaTree')
// export const AREA_TREE = getApi('goods/gateway/login')
export const NEWS_LIST = getApi('news/newslist')
export const SINGER_DATA = getApi('music/singerData')

// 博客
export const QUERY_BLOG_DATA = getApi('api/blog/list')
export const QUERY_BLOG_DETAIL = getApi('api/blog/detail')
export const CREATE_BLOG = getApi('api/blog/new')
export const EDIT_BLOG = getApi('api/blog/edit')
export const USER_LOGIN = getApi('api/user/login')
