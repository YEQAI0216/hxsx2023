const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "示例分类1" },
  { id: 2, title: "示例分类2" },
  { id: 3, title: "示例分类3" },
  { id: 4, title: "示例分类4" },
  { id: 5, title: "示例分类5" },
  { id: 6, title: "友情链接" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "正在建设",
    url: "/4399.com/",
    icon: "",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "主标题",
    description: "网站描述",
    url: "http://www.your-web-page.com/",
    icon: "",
  },
  {
    sortId: 1,
    title: "主标题",
    description: "网站描述",
    url: "http://www.your-web-page.com/",
    icon: "",
  },
  {
    sortId: 6,
    title: "EsunR Blog",
    description: "EsunR 的博客",
    url: "https://www.esunr.xyz",
    icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
  },
];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "EsunR-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.esunr.xyz",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "陇ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎访问河西肃兴",
    "河西肃兴",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "SUXING",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
