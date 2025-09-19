WidgetMetadata = {
  id: "forward.combined.media.lists",
  title: "影视榜单",
  description: "影视动画榜单",
  author: "阿米诺斯",
  site: "https://widgets-xd.vercel.app",
  version: "1.3.8",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  modules: [
    // -------------TMDB模块-------------
    // --- 热门模块 ---
    {
      title: "TMDB 热门剧集",
      description: "今日热门电视剧",
      requiresWebView: false,
      functionName: "loadTodayHotTV",
      cacheDuration: 3600,
      params: [
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
        { 
          name: "sort_by", 
          title: "地区", 
          type: "enumeration", 
          enumOptions: [
            { title: "全部地区", value: "" },
            { title: "中国", value: "CN" },
            { title: "美国", value: "US" },
            { title: "韩国", value: "KR" },
            { title: "日本", value: "JP" },
            { title: "英国", value: "GB" }
          ], 
          value: "" 
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "TMDB 热门电影",
      description: "今日热门电影",
      requiresWebView: false,
      functionName: "loadTodayHotMovies",
      cacheDuration: 3600,
      params: [
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
        { 
          name: "sort_by", 
          title: "地区", 
          type: "enumeration", 
          enumOptions: [
            { title: "全部地区", value: "" },
            { title: "中国", value: "CN" },
            { title: "美国", value: "US" },
            { title: "韩国", value: "KR" },
            { title: "日本", value: "JP" },
            { title: "英国", value: "GB" }
          ], 
          value: "" 
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    // --- 常规发现模块 ---
    {
      title: "TMDB 高分内容",
      description: "高分电影或剧集 (按用户评分排序)",
      requiresWebView: false,
      functionName: "tmdbTopRated",
      cacheDuration: 3600,
      params: [
        { 
          name: "type", 
          title: "🎭类型", 
          type: "enumeration", 
          enumOptions: [
            { title: "电影", value: "movie" },
            { title: "剧集", value: "tv" }
          ], 
          value: "movie" 
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    // --- 播出平台模块 ---
    {
        title: "TMDB 播出平台",
        description: "按播出平台和内容类型筛选剧集内容",
        requiresWebView: false,
        functionName: "tmdbDiscoverByNetwork",
        cacheDuration: 3600,
        params: [
            {
                name: "with_networks",
                title: "播出平台",
                type: "enumeration",
                description: "选择一个平台以查看其剧集内容",
                value: "",
                belongTo: {
                  paramName: "air_status",
                  value: ["released","upcoming",""],
                },
          enumOptions: [
            { title: "全部", value: "" },
            { title: "Tencent", value: "2007" },
            { title: "iQiyi", value: "1330" },
            { title: "Youku", value: "1419" },
            { title: "Bilibili", value: "1605" },
            { title: "MGTV", value: "1631" },
            { title: "Netflix", value: "213" },
            { title: "Disney+", value: "2739" },
            { title: "HBO", value: "49" },
            { title: "HBO Max", value: "3186" },
            { title: "Apple TV+", value: "2552" },
            { title: "Hulu", value: "453" },
            { title: "Amazon Prime Video", value: "1024" },
            { title: "FOX", value: "19" },
            { title: "Paramount+", value: "4330" },
            { title: "TV Tokyo", value: "94" },
            { title: "BBC One", value: "332" },
            { title: "BBC Two", value: "295" },
            { title: "NBC", value: "6" },
            { title: "AMC+", value: "174" },
            { title: "We TV", value: "3732" },
            { title: "Viu TV", value: "2146" }
          ]
        },
        {
          name: "with_genres",
          title: "🎭内容类型",
          type: "enumeration",
          description: "选择要筛选的内容类型",
          value: "",
          belongTo: {
            paramName: "air_status",
            value: ["released","upcoming",""],
          },
          enumOptions: [
            { title: "全部类型", value: "" },
            { title: "犯罪", value: "80" },
            { title: "动画", value: "16" },
            { title: "喜剧", value: "35" },
            { title: "剧情", value: "18" },
            { title: "家庭", value: "10751" },
            { title: "悬疑", value: "9648" },
            { title: "真人秀", value: "10764" },
            { title: "脱口秀", value: "10767" },
            { title: "纪录片", value: "99" },
            { title: "动作与冒险", value: "10759" },
            { title: "科幻与奇幻", value: "10765" },
            { title: "战争与政治", value: "10768" }
          ]
        },
        {
          name: "air_status",
          title: "上映状态",
          type: "enumeration",
          description: "默认已上映",
          value: "released",
          enumOptions: [
            { title: "已上映", value: "released" },
            { title: "未上映", value: "upcoming" },
            { title: "全部", value: "" }
          ]
        },
        {
          name: "sort_by",
          title: "🔢 排序方式",
          type: "enumeration",
          description: "选择内容排序方式,默认上映时间↓",
          value: "first_air_date.desc",
          enumOptions: [
            { title: "上映时间↓", value: "first_air_date.desc" },
            { title: "上映时间↑", value: "first_air_date.asc" },
            { title: "人气最高", value: "popularity.desc" },
            { title: "评分最高", value: "vote_average.desc" },
            { title: "最多投票", value: "vote_count.desc" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    // --- 出品公司模块 ---
    {
      title: "TMDB 出品公司",
      functionName: "tmdbCompanies",
      cacheDuration: 3600,
      params: [
        {
          name: "with_companies",
          title: "出品公司",
          type: "enumeration",
          value: "",
          description: "选择一个公司以查看其剧集内容",
          belongTo: {
            paramName: "air_status",
            value: ["released","upcoming",""],
          },
          enumOptions: [
            { title: "全部", value: "" },
            { title: "Disney", value: "2" },
            { title: "Warner Bros", value: "174" },
            { title: "Columbia", value: "5" },
            { title: "Sony", value: "34" },
            { title: "Universal", value: "33" },
            { title: "Paramount", value: "4" },
            { title: "20th Century", value: "25" },
            { title: "Marvel", value: "420" },
            { title: "Toho", value: "882" },
            { title: "中国电影集团公司", value: "14714" },
            { title: "BBC", value: "3324" },
            { title: "A24", value: "41077" },
            { title: "Blumhouse", value: "3172" },
            { title: "Working Title Films", value: "10163" }
          ]
        },
        {
          name: "with_genres",
          title: "🎭内容类型",
          type: "enumeration",
          description: "选择要筛选的内容类型",
          value: "",
          belongTo: {
            paramName: "air_status",
            value: ["released","upcoming",""],
          },
          enumOptions: [
            { title: "全部类型", value: "" },
            { title: "冒险", value: "12" },
            { title: "剧情", value: "18" },
            { title: "动作", value: "28" },
            { title: "动画", value: "16" },
            { title: "历史", value: "36" },
            { title: "喜剧", value: "35" },
            { title: "奇幻", value: "14" },
            { title: "家庭", value: "10751" },
            { title: "恐怖", value: "27" },
            { title: "悬疑", value: "9648" },
            { title: "惊悚", value: "53" },
            { title: "战争", value: "10752" },
            { title: "爱情", value: "10749" },
            { title: "犯罪", value: "80" },
            { title: "科幻", value: "878" },
            { title: "记录", value: "99" },
            { title: "西部", value: "37" },
            { title: "音乐", value: "10402" },
            { title: "电视电影", value: "10770" }
          ]
        },
        {
          name: "air_status",
          title: "上映状态",
          type: "enumeration",
          description: "默认已上映",
          value: "released",
          enumOptions: [
            { title: "已上映", value: "released" },
            { title: "未上映", value: "upcoming" },
            { title: "全部", value: "" }
          ]
        },
        {
          name: "sort_by",
          title: "🔢 排序方式",
          type: "enumeration",
          description: "选择内容排序方式,默认上映时间↓",
          value: "primary_release_date.desc",
          enumOptions: [
            { title: "上映时间↓", value: "primary_release_date.desc" },
            { title: "上映时间↑", value: "primary_release_date.asc" },
            { title: "人气最高", value: "popularity.desc" },
            { title: "评分最高", value: "vote_average.desc" },
            { title: "最多投票", value: "vote_count.desc" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    // =============屏蔽管理模块=============
    {
      title: "TMDB 搜索屏蔽",
      description: "通过影片名称搜索TMDB并自动添加所有结果到黑名单",
      requiresWebView: false,
      functionName: "searchAndBlock",
      cacheDuration: 0,
      params: [
        {
          name: "action",
          title: "🎯 操作模式",
          type: "enumeration",
          description: "选择操作类型",
          value: "search_only",
          enumOptions: [
            { title: "仅搜索", value: "search_only" },
            { title: "搜索并屏蔽", value: "search_and_block" },
            { title: "手动屏蔽ID", value: "manual_block" }
          ]
        },
        {
          name: "query",
          title: "🔍 影片名称",
          type: "input",
          description: "输入要搜索的影片或剧集名称（搜索模式使用）",
          value: "",
          placeholder: "例如：鬼吹灯、南方公园"
        },
        {
          name: "language",
          title: "🌐 搜索语言",
          type: "enumeration",
          description: "选择搜索语言（搜索模式使用）",
          value: "zh-CN",
          enumOptions: [
            { title: "中文", value: "zh-CN" },
            { title: "English", value: "en-US" },
            { title: "其他语言", value: "en" }
          ]
        },
        {
          name: "tmdb_id",
          title: "🆔 TMDB ID",
          type: "input",
          description: "输入要屏蔽的TMDB ID,（手动屏蔽模式使用）",
          value: "",
          placeholder: "例如：550, 1399"
        },
        {
          name: "media_type",
          title: "🎭 媒体类型",
          type: "enumeration",
          description: "选择媒体类型（手动屏蔽模式使用）",
          value: "tv",
          enumOptions: [
            { title: "剧集", value: "tv" },
            { title: "电影", value: "movie" }
          ]
        }
      ]
    },
    {
      title: "TMDB 屏蔽管理",
      description: "查看和管理已屏蔽的内容",
      requiresWebView: false,
      functionName: "manageBlockedItems",
      cacheDuration: 0,
      params: [
        {
          name: "action",
          title: "📋 操作",
          type: "enumeration",
          description: "选择要执行的操作",
          value: "view",
          enumOptions: [
            { title: "查看黑名单", value: "view" },
            { title: "清空黑名单", value: "clear" },
            { title: "取消屏蔽", value: "unblock" },
            { title: "导出配置", value: "export" },
            { title: "导入配置", value: "import" }
          ]
        },
        {
          name: "unblock_id",
          title: "🔓 取消屏蔽ID",
          type: "input",
          description: "输入要取消屏蔽的TMDB ID",
          value: "",
          placeholder: "例如：2190",
          belongTo: { paramName: "action", value: ["unblock"] }
        },
        {
          name: "unblock_media_type",
          title: "🎭 媒体类型",
          type: "enumeration",
          description: "选择要取消屏蔽的媒体类型",
          value: "tv",
          enumOptions: [
            { title: "剧集", value: "tv" },
            { title: "电影", value: "movie" }
          ],
          belongTo: { paramName: "action", value: ["unblock"] }
        },
        {
          name: "import_data",
          title: "📥 导入数据",
          type: "input",
          description: "粘贴要导入的屏蔽ID列表，支持多种格式",
          value: "",
          placeholder: "支持格式：550,1399 或 '550','1399' 或 \"550\",\"1399\"",
          belongTo: { paramName: "action", value: ["import"] }
        }
      ]
    },
    // -------------豆瓣模块-------------
    // --- 片单解析 ---
    {
      title: "豆瓣自定义片单",
      description: "支持格式:桌面/移动端豆列、官方榜单、App dispatch",
      requiresWebView: false,
      functionName: "loadEnhancedDoubanList",
      cacheDuration: 3600,
      params: [
        {
          name: "url", 
          title: "🔗 片单地址", 
          type: "input", 
          description: "支持格式:桌面/移动端豆列、官方榜单、App dispatch",
          placeholders: [
              { title: "豆瓣电影实时热榜", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/movie_real_time_hotest/&dt_dapp=1" },
              { title: "豆瓣剧集实时热榜", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/tv_real_time_hotest/&dt_dapp=1" },
              { title: "豆瓣书影音实时热榜", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/subject_real_time_hotest/&dt_dapp=1" },
              { title: "一周电影口碑榜", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/movie_weekly_best/&dt_dapp=1" },
              { title: "华语口碑剧集榜", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/tv_chinese_best_weekly/&dt_dapp=1" },
              { title: "全球口碑剧集榜", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/tv_global_best_weekly/&dt_dapp=1" },
              { title: "国内热播综艺", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/show_domestic/&dt_dapp=1" },
              { title: "国外热播综艺", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/show_foreign/&dt_dapp=1" },
              { title: "当地影院热映", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/movie_showing/&dt_dapp=1" },
              { title: "热门动画", 
              value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/tv_animation/&dt_dapp=1" }
          ]
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

// ===============屏蔽配置===============
const STORAGE_KEY = "forward_blocked_items";

let blockedIdCache = null;

function getBlockedIdSet() {
  try {
    if (blockedIdCache) {
      return blockedIdCache;
    }
    
    const stored = Widget.storage.get(STORAGE_KEY);
    const blockedItems = stored ? JSON.parse(stored) : [];
    const idSet = new Set();
    
    for (let i = 0; i < blockedItems.length; i++) {
      const item = blockedItems[i];
      const idStr = String(item.id);
      const idNum = parseInt(item.id);
      
      idSet.add(idStr + "_" + item.media_type);
      idSet.add(idNum + "_" + item.media_type);
      
      idSet.add(idStr);
      idSet.add(idNum);
    }
    
    blockedIdCache = idSet;
    
    return idSet;
  } catch (error) {
    return new Set();
  }
}

function clearBlockedIdCache() {
  blockedIdCache = null;
}

function isItemBlocked(item) {
  if (!item || !item.id) return false;
  
  const blockedIdSet = getBlockedIdSet();
  const itemId = String(item.id);
  const itemIdNum = parseInt(item.id);
  
  if (blockedIdSet.has(itemId) || blockedIdSet.has(itemIdNum)) {
    return true;
  }
  
  if (item.mediaType || item.media_type) {
    const mediaType = item.mediaType || item.media_type;
    if (blockedIdSet.has(itemId + "_" + mediaType) || blockedIdSet.has(itemIdNum + "_" + mediaType)) {
      return true;
    }
  }
  
  if (item.originalDoubanId) {
    const doubanId = String(item.originalDoubanId);
    const doubanIdNum = parseInt(item.originalDoubanId);
    if (blockedIdSet.has(doubanId) || blockedIdSet.has(doubanIdNum)) {
      return true;
    }
  }
  
  return false;
}

function filterBlockedItems(items) {
  if (!Array.isArray(items)) return items;
  
  const filtered = [];
  for (let i = 0; i < items.length; i++) {
    if (!isItemBlocked(items[i])) {
      filtered.push(items[i]);
    }
  }
  return filtered;
}

function addToBlockList(tmdbId, mediaType = "movie", title = "", additionalInfo = {}) {
  try {
    const stored = Widget.storage.get(STORAGE_KEY);
    const blockedItems = stored ? JSON.parse(stored) : [];
    
    const itemId = String(tmdbId);
    
    let exists = false;
    for (let i = 0; i < blockedItems.length; i++) {
      if (blockedItems[i].id === itemId && blockedItems[i].media_type === mediaType) {
        exists = true;
        break;
      }
    }
    
    if (!exists) {
      blockedItems.push({
        id: itemId,
        media_type: mediaType,
        title: title || `TMDB ID: ${itemId}`,
        poster_path: additionalInfo.poster_path || "",
        overview: additionalInfo.overview || "通过Move_list.js添加的屏蔽项",
        blocked_date: new Date().toISOString(),
        vote_average: additionalInfo.vote_average || 0
      });
      
      Widget.storage.set(STORAGE_KEY, JSON.stringify(blockedItems));
      clearBlockedIdCache();
      return true;
    }
    
    return false;
  } catch (error) {
    return false;
  }
}

// ===============辅助函数===============
let tmdbGenresCache = null;

async function fetchTmdbGenres() {
    if (tmdbGenresCache) return tmdbGenresCache;
    
    const [movieGenres, tvGenres] = await Promise.all([
        Widget.tmdb.get('/genre/movie/list', { params: { language: 'zh-CN' } }),
        Widget.tmdb.get('/genre/tv/list', { params: { language: 'zh-CN' } })
    ]);
    
    tmdbGenresCache = {
        movie: movieGenres.genres.reduce((acc, g) => ({ ...acc, [g.id]: g.name }), {}),
        tv: tvGenres.genres.reduce((acc, g) => ({ ...acc, [g.id]: g.name }), {})
    };
    return tmdbGenresCache;
}

function getTmdbGenreTitles(genreIds, mediaType) {
    const genres = tmdbGenresCache?.[mediaType] || {};
    const topThreeIds = genreIds.slice(0, 3); 
    return topThreeIds
        .map(id => genres[id]?.trim() || `\u672a\u77e5\u7c7b\u578b(${id})`)
        .filter(Boolean)
        .join('•');
}

function getDoubanGenreTitles(genres, itemType) {
    if (!genres) {
        return "";
    }
    
    let genreArray = [];
    
    if (typeof genres === 'string') {
        const cleanGenres = genres.trim();
        if (cleanGenres) {
            if (cleanGenres.includes(',')) {
                genreArray = cleanGenres.split(',');
            } else if (cleanGenres.includes('、')) {
                genreArray = cleanGenres.split('、');
            } else if (cleanGenres.includes('/')) {
                genreArray = cleanGenres.split('/');
            } else if (cleanGenres.includes(' ')) {
                genreArray = cleanGenres.split(' ');
            } else {
                genreArray = [cleanGenres];
            }
        }
    } 
    else if (Array.isArray(genres)) {
        genreArray = genres.filter(g => g && g.trim());
    } 
    else {
        const genreStr = String(genres).trim();
        if (genreStr && genreStr !== 'undefined' && genreStr !== 'null') {
            genreArray = [genreStr];
        }
    }
    
    genreArray = genreArray
        .map(g => g.trim())
        .filter(g => g && g !== '')
        .filter((genre, index, arr) => arr.indexOf(genre) === index);
    
    if (genreArray.length === 0) {
        return "";
    }
    
    const topThreeGenres = genreArray.slice(0, 3);
    return topThreeGenres.join(' ');
}

function extractGenresFromText(text) {
    if (!text) return [];
    
    const genreKeywords = [
        '\u52a8\u4f5c', '\u79d1\u5e7b', '\u707e\u96be', '\u7231\u60c5', '\u559c\u5267', '\u60ac\u7591', '\u72af\u7f6a', '\u5192\u9669', '\u5947\u5e7b', '\u6218\u4e89',
        '\u5386\u53f2', '\u6b66\u4fa0', '\u60ca\u609a', '\u6050\u6016', '\u60c5\u8272', '\u52a8\u753b', '\u5267\u60c5', '\u897f\u90e8', '\u5bb6\u5ead', '\u97f3\u4e50',
        '\u8fd0\u52a8', '\u53e4\u88c5', '\u6b4c\u821e', '\u4f20\u8bb0', '\u77ed\u7247', '\u7eaa\u5f55\u7247', '\u6587\u827a', '\u9752\u6625', '\u6821\u56ed', '\u804c\u573a',
        '\u90fd\u5e02', '\u519c\u6751', '\u519b\u4e8b', '\u8b66\u532a', '\u8c0d\u6218', '\u5bab\u5ef7', '\u795e\u8bdd', '\u9b54\u5e7b'
    ];
    
    const foundGenres = [];
    
    const typePattern = /(?:\u7c7b\u578b|genre)[\uff1a:\s]*([^\n\r]+)/i;
    const typeMatch = text.match(typePattern);
    if (typeMatch) {
        const typeText = typeMatch[1];
        const types = typeText.split(/[\/\u3001,\uff0c\s]+/).filter(t => t.trim());
        foundGenres.push(...types);
    }
    
    for (const keyword of genreKeywords) {
        if (text.includes(keyword) && !foundGenres.includes(keyword)) {
            foundGenres.push(keyword);
        }
    }
    
    return foundGenres.slice(0, 3);
}

function formatItemDescription(item) {
    let description = item.description || '';
    const hasRating = /\u8bc4\u5206|rating/i.test(description);
    const hasYear = /\u5e74\u4efd|year/i.test(description);
    const hasType = /\u7c7b\u578b|type/i.test(description);
    
    if (item.itemType && !hasType) {
        description = `\u7c7b\u578b: ${item.itemType} | ${description}`;
    }
    
    if (item.rating && !hasRating) {
        description = `\u8bc4\u5206: ${item.rating} | ${description}`;
    }
    
    if (item.releaseDate && !hasYear) {
        const year = String(item.releaseDate).substring(0,4);
        if (/^\d{4}$/.test(year)) {
            description = `\u5e74\u4efd: ${year} | ${description}`;
        }
    }
    
    return description
        .replace(/^\|\s*/, '')
        .replace(/\s*\|$/, '')
        .trim();
}

function calculatePagination(params) {
    let page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 20;
    
    if (typeof params.start !== 'undefined') {
        page = Math.floor(parseInt(params.start) / limit) + 1;
    }
    
    const start = (page - 1) * limit;
    return { page, limit, start };
}

function getBeijingDate() {
    const now = new Date();
    const beijingTime = now.getTime() + (8 * 60 * 60 * 1000);
    const beijingDate = new Date(beijingTime);
    return `${beijingDate.getUTCFullYear()}-${String(beijingDate.getUTCMonth() + 1).padStart(2, '0')}-${String(beijingDate.getUTCDate()).padStart(2, '0')}`;
}

function parseDoubanAppDispatchUrl(url) {
    const cleanedUrl = url.replace(/\s+/g, '').trim();
    const questionMarkIndex = cleanedUrl.indexOf('?');
    const queryString = cleanedUrl.substring(questionMarkIndex + 1);
    
    const params = {};
    const paramPairs = queryString.split('&');
    for (const pair of paramPairs) {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    
    const uriParam = params['uri'];
    const cleanUri = (uriParam.startsWith('/') ? uriParam.substring(1) : uriParam).trim();
    
    if (cleanUri.includes('subject_collection/')) {
        return `https://m.douban.com/${cleanUri}`;
    }
    else if (cleanUri.includes('doulist/')) {
        return `https://www.douban.com/${cleanUri}`;
    }
    
    return null;
}

// ================TMDB功能函数===============
async function fetchTmdbData(api, params) {
    const [data, genres] = await Promise.all([
        Widget.tmdb.get(api, { params: params }),
        fetchTmdbGenres()
    ]);

    const filteredResults = data.results
        .filter((item) => {
            return item.poster_path &&
                   item.id &&
                   (item.title || item.name) &&
                   (item.title || item.name).trim().length > 0;
        })
        .map((item) => {
            const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
            const genreIds = item.genre_ids || [];
            const genreTitle = getTmdbGenreTitles(genreIds, mediaType);

            return {
                id: item.id,
                type: "tmdb",
                title: item.title || item.name,
                description: item.overview,
                releaseDate: item.release_date || item.first_air_date,
                backdropPath: item.backdrop_path,
                posterPath: item.poster_path,
                rating: item.vote_average,
                mediaType: mediaType,
                genreTitle: genreTitle
            };
        });

    return filterBlockedItems(filteredResults);
}

async function loadTmdbTrendingData() {
    try {
        const response = await Widget.http.get("https://widgets-xd.vercel.app/data/TMDB_Trending.json", {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15'
            }
        });
        return response.data;
    } catch (error) {
        try {
            const fallbackResponse = await Widget.http.get("https://widgets-xd.vercel.app/data/TMDB_Trending.json");
            return fallbackResponse.data;
        } catch (fallbackError) {
            throw fallbackError;
        }
    }
}

async function loadTodayHotTV(params) {
  const page = parseInt(params.page) || 1;
  const region = params.sort_by || '';
  
  if (region) {
    const [data, genres] = await Promise.all([
      Widget.tmdb.get(`/discover/tv`, { 
        params: { 
          language: params.language || 'zh-CN',
          page: page,
          with_origin_country: region,
          sort_by: 'popularity.desc'
        } 
      }),
      fetchTmdbGenres()
    ]);
    
    const items = data.results
      .filter(item => item.poster_path)
      .map(item => ({
        id: String(item.id),
        type: "tmdb",
        title: item.name,
        description: item.overview,
        releaseDate: item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: "tv",
        genreTitle: getTmdbGenreTitles(item.genre_ids || [], "tv")
      }));
    
    return filterBlockedItems(items);
  }
  
  if (page === 1) {
    try {
      const data = await loadTmdbTrendingData();
      const allTvItems = data.today_tv || [];
      
      const tvItems = [];
      for (let i = 0; i < allTvItems.length && tvItems.length < 20; i++) {
        const item = allTvItems[i];
        if (item.type === 'tv' && item.poster_url) {
          tvItems.push({
            id: item.id.toString(),
            type: "tmdb",
            title: item.title,
            genreTitle: item.genreTitle,
            rating: item.rating,
            description: item.overview,
            releaseDate: item.release_date,
            posterPath: item.poster_url,
            backdropPath: item.title_backdrop,
            mediaType: 'tv'
          });
        }
      }
      
      return filterBlockedItems(tvItems);
    } catch (error) {
    }
  }
  
  const [data, genres] = await Promise.all([
    Widget.tmdb.get(`/trending/tv/day`, { 
      params: { 
        language: params.language || 'zh-CN',
        page: page
      } 
    }),
    fetchTmdbGenres()
  ]);
  
  const items = data.results
    .filter(item => (!item.media_type || item.media_type === 'tv') && item.poster_path)
    .map(item => ({
      id: String(item.id),
      type: "tmdb",
      title: item.name,
      description: item.overview,
      releaseDate: item.first_air_date,
      backdropPath: item.backdrop_path,
      posterPath: item.poster_path,
      rating: item.vote_average,
      mediaType: "tv",
      genreTitle: getTmdbGenreTitles(item.genre_ids || [], "tv")
    }));
  
  return filterBlockedItems(items);
}

async function loadTodayHotMovies(params) {
  const page = parseInt(params.page) || 1;
  const region = params.sort_by || '';
  
  if (region) {
    const [data, genres] = await Promise.all([
      Widget.tmdb.get(`/discover/movie`, { 
        params: { 
          language: params.language || 'zh-CN',
          page: page,
          with_origin_country: region,
          sort_by: 'popularity.desc'
        } 
      }),
      fetchTmdbGenres()
    ]);
    
    const items = data.results
      .filter(item => item.poster_path)
      .map(item => ({
        id: String(item.id),
        type: "tmdb",
        title: item.title,
        description: item.overview,
        releaseDate: item.release_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: "movie",
        genreTitle: getTmdbGenreTitles(item.genre_ids || [], "movie")
      }));
    
    return filterBlockedItems(items);
  }
  
  if (page === 1) {
    try {
      const data = await loadTmdbTrendingData();
      const allMovieItems = data.today_movies || [];
      
      const movieItems = [];
      for (let i = 0; i < allMovieItems.length && movieItems.length < 20; i++) {
        const item = allMovieItems[i];
        if (item.type === 'movie' && item.poster_url) {
          movieItems.push({
            id: item.id.toString(),
            type: "tmdb",
            title: item.title,
            genreTitle: item.genreTitle,
            rating: item.rating,
            description: item.overview,
            releaseDate: item.release_date,
            posterPath: item.poster_url,
            backdropPath: item.title_backdrop,
            mediaType: 'movie'
          });
        }
      }
      
      return filterBlockedItems(movieItems);
    } catch (error) {
    }
  }
  
  const [data, genres] = await Promise.all([
    Widget.tmdb.get(`/trending/movie/day`, { 
      params: { 
        language: params.language || 'zh-CN',
        page: page
      } 
    }),
    fetchTmdbGenres()
  ]);
  
  const items = data.results
    .filter(item => (!item.media_type || item.media_type === 'movie') && item.poster_path)
    .map(item => ({
      id: String(item.id),
      type: "tmdb",
      title: item.title,
      description: item.overview,
      releaseDate: item.release_date,
      backdropPath: item.backdrop_path,
      posterPath: item.poster_path,
      rating: item.vote_average,
      mediaType: "movie",
      genreTitle: getTmdbGenreTitles(item.genre_ids || [], "movie")
    }));
  
  return filterBlockedItems(items);
}

async function tmdbTopRated(params) {
    const type = params.type || 'movie';
    const api = type === 'movie' ? `movie/top_rated` : `tv/top_rated`;
    return await fetchTmdbData(api, params);
}

async function tmdbDiscoverByNetwork(params = {}) {
    const api = "discover/tv";
    const beijingDate = getBeijingDate();
    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        with_networks: params.with_networks,
        sort_by: params.sort_by || "first_air_date.desc",
    };
    
    if (params.air_status === 'released') {
        discoverParams['first_air_date.lte'] = beijingDate;
    } else if (params.air_status === 'upcoming') {
        discoverParams['first_air_date.gte'] = beijingDate;
    }
    
    if (params.with_genres) {
        discoverParams.with_genres = params.with_genres;
    }
    
    return await fetchTmdbData(api, discoverParams);
}

async function tmdbCompanies(params = {}) {
    const api = "discover/movie";
    const beijingDate = getBeijingDate();
    const withCompanies = String(params.with_companies || '').trim();

    const cleanParams = {
        page: params.page || 1,
        language: params.language || "zh-CN",
        sort_by: params.sort_by || "primary_release_date.desc",
        include_adult: false,
        include_video: false
    };

    if (withCompanies) {
        cleanParams.with_companies = withCompanies;
    }

    if (params.air_status === 'released') {
        cleanParams['primary_release_date.lte'] = beijingDate;
    } else if (params.air_status === 'upcoming') {
        cleanParams['primary_release_date.gte'] = beijingDate;
    }

    if (params.with_genres) {
        cleanParams.with_genres = String(params.with_genres).trim();
    }

    return await fetchTmdbData(api, cleanParams);
}

//=============屏蔽管理功能函数=============
function getBlockedItems() {
  try {
    const stored = Widget.storage.get(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
}

function saveBlockedItems(items) {
  try {
    Widget.storage.set(STORAGE_KEY, JSON.stringify(items));
    clearBlockedIdCache();
    return true;
  } catch (error) {
    return false;
  }
}

function addBlockedItem(item) {
  const blockedItems = getBlockedItems();
  
  const exists = blockedItems.some(blocked => 
    blocked.id === String(item.id) && blocked.media_type === item.media_type
  );
  
  if (!exists) {
    blockedItems.push({
      id: String(item.id),
      media_type: item.media_type,
      title: item.title,
      poster_path: item.poster_path,
      overview: item.overview,
      blocked_date: new Date().toISOString(),
      vote_average: item.vote_average || 0
    });
    
    return saveBlockedItems(blockedItems);
  }
  
  return false;
}

function removeBlockedItem(id, mediaType) {
  const blockedItems = getBlockedItems();
  const filtered = blockedItems.filter(item => 
    !(item.id === String(id) && item.media_type === mediaType)
  );
  
  return saveBlockedItems(filtered);
}

function clearBlockedItems() {
  try {
    Widget.storage.clear();
    clearBlockedIdCache();
    return true;
  } catch (error) {
    return false;
  }
}

async function searchTMDB(query, language) {
  if (!query || query.trim().length === 0) {
    throw new Error("搜索关键词不能为空");
  }

  try {
    
    const response = await Widget.tmdb.get("/search/multi", {
      params: {
        query: query.trim(),
        language: language || "zh-CN",
        page: 1
      }
    });

    if (!response) {
      throw new Error("TMDB API无响应");
    }

    let results = [];
    if (response.results) {
      results = response.results;
    } else if (response.data && response.data.results) {
      results = response.data.results;
    } else if (Array.isArray(response)) {
      results = response;
    } else {
      throw new Error("无法解析TMDB响应结构");
    }

    const filteredResults = [];
    for (let i = 0; i < results.length && filteredResults.length < 20; i++) {
      const item = results[i];
      if ((item.media_type === "movie" || item.media_type === "tv") &&
          item.id &&
          (item.title || item.name) &&
          item.poster_path) {
        
        const title = item.title || item.name;
        const releaseDate = item.release_date || item.first_air_date;
        const year = releaseDate ? new Date(releaseDate).getFullYear() : "";
        
        filteredResults.push({
          id: String(item.id),
          media_type: item.media_type,
          title: title,
          poster_path: item.poster_path,
          overview: item.overview || "",
          vote_average: item.vote_average || 0,
          release_date: releaseDate,
          year: year
        });
      }
    }
    
    return filteredResults;
    
  } catch (error) {
    throw new Error("搜索失败: " + error.message);
  }
}

async function searchAndBlock(params) {
  const action = params.action || "search_and_block";
  
  if (action === "manual_block") {
    const tmdbId = params.tmdb_id ? params.tmdb_id.trim() : '';
    const mediaType = params.media_type || "movie";
    
    if (!tmdbId) {
      return [{
        id: "no_id",
        type: "info",
        title: "❓ 请输入TMDB ID",
        description: "在上方输入框中输入要屏蔽的TMDB ID，然后重新运行此模块。",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (!/^\d+$/.test(tmdbId)) {
      return [{
        id: "invalid_id",
        type: "error",
        title: "❌ 无效的ID格式",
        description: "TMDB ID应该是纯数字，例如：550、1399",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }

    try {
      const endpoint = mediaType === "movie" ? "/movie/" + tmdbId : "/tv/" + tmdbId;
      
      const response = await Widget.tmdb.get(endpoint, {
        params: { language: "zh-CN" }
      });

      let item = null;
      if (response && response.data) {
        item = response.data;
      } else if (response && (response.title || response.name)) {
        item = response;
      } else {
        throw new Error("无法解析详情响应结构");
      }

      const title = item.title || item.name;
      
      if (!title) {
        return [{
          id: "not_found",
          type: "error",
          title: "❌ 内容不存在",
          description: "未找到ID为 " + tmdbId + " 的" + (mediaType === "movie" ? "电影" : "剧集"),
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }

      const blockItem = {
        id: tmdbId,
        media_type: mediaType,
        title: title,
        poster_path: item.poster_path,
        overview: item.overview,
        vote_average: item.vote_average
      };

      const success = addBlockedItem(blockItem);
      const mediaTypeText = mediaType === "movie" ? "电影" : "剧集";
      const ratingText = item.vote_average ? " ⭐" + item.vote_average.toFixed(1) : "";
      
      return [{
        id: "manual_block_result_" + tmdbId,
        type: "info",
        title: success ? "✅ 屏蔽成功" : "ℹ️ 已存在",
        description: success ? 
          mediaTypeText + "\"" + title + "\"" + ratingText + "已添加到黑名单" : 
          mediaTypeText + "\"" + title + "\"" + ratingText + "已在黑名单中",
        posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
        backdropPath: "",
        rating: item.vote_average || 0,
        mediaType: mediaType
      }];

    } catch (error) {
      return [{
        id: "manual_block_error",
        type: "error", 
        title: "❌ 屏蔽失败",
        description: "错误信息: " + error.message,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }
  }
  
  const query = params.query ? params.query.trim() : '';
  const language = params.language || "zh-CN";
  
  if (!query) {
    return [{
      id: "no_query",
      type: "info",
      title: "❓ 请输入搜索关键词",
      description: "在上方输入框中输入要搜索的影片或剧集名称，然后重新运行此模块。",
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    }];
  }

  try {
    const searchResults = await searchTMDB(query, language);
    
    if (searchResults.length === 0) {
      return [{
        id: "no_results",
        type: "info", 
        title: "🔍 未找到匹配结果",
        description: "没有找到与\"" + query + "\"相关的影片或剧集，请尝试其他关键词。",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    const resultItems = [];
    
    if (action === "search_only") {
      const blockedItems = getBlockedItems();
      const blockedIds = new Set();
      for (let i = 0; i < blockedItems.length; i++) {
        blockedIds.add(blockedItems[i].id + "_" + blockedItems[i].media_type);
      }
      
      for (let i = 0; i < searchResults.length; i++) {
        const item = searchResults[i];
        const isBlocked = blockedIds.has(item.id + "_" + item.media_type);
        const mediaTypeText = item.media_type === "movie" ? "电影" : "剧集";
        const yearText = item.year ? " (" + item.year + ")" : "";
        const ratingText = item.vote_average ? " ⭐" + item.vote_average.toFixed(1) : "";
        const statusText = isBlocked ? " 🚫已屏蔽" : "";
        
        resultItems.push({
          id: "search_" + item.id + "_" + item.media_type,
          type: "info",
          title: item.title + yearText + statusText,
          description: mediaTypeText + ratingText + " (TMDB ID: " + item.id + ") | " + (item.overview || "暂无简介"),
          posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
          backdropPath: "",
          rating: item.vote_average || 0,
          mediaType: item.media_type
        });
      }
      
      resultItems.unshift({
        id: "search_summary",
        type: "info",
        title: "🔍 搜索结果",
        description: "搜索\"" + query + "\"找到 " + searchResults.length + " 个结果\n\n" +
                     "如需屏蔽这些内容，请选择\"搜索并屏蔽\"模式。",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      });
      
    } else {
      let blockedCount = 0;
      let alreadyBlockedCount = 0;
      
      for (let i = 0; i < searchResults.length; i++) {
        const item = searchResults[i];
        const mediaTypeText = item.media_type === "movie" ? "电影" : "剧集";
        const yearText = item.year ? " (" + item.year + ")" : "";
        const ratingText = item.vote_average ? " ⭐" + item.vote_average.toFixed(1) : "";
        
        const blockItem = {
          id: item.id,
          media_type: item.media_type,
          title: item.title,
          poster_path: item.poster_path,
          overview: item.overview,
          vote_average: item.vote_average
        };
        
        const success = addBlockedItem(blockItem);
        if (success) {
          blockedCount++;
        } else {
          alreadyBlockedCount++;
        }
        
        const status = success ? "✅ 已屏蔽" : "🚫 已存在";
        
        resultItems.push({
          id: "blocked_" + item.id + "_" + item.media_type,
          type: "info",
          title: status + " " + item.title + yearText,
          description: mediaTypeText + ratingText + " (TMDB ID: " + item.id + ") | " + (item.overview || "暂无简介"),
          posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
          backdropPath: "",
          rating: item.vote_average || 0,
          mediaType: item.media_type
        });
      }
      
      resultItems.unshift({
        id: "block_summary",
        type: "info",
        title: "🎯 屏蔽操作完成",
        description: "搜索\"" + query + "\"找到 " + searchResults.length + " 个结果\n" +
                     "新增屏蔽: " + blockedCount + " 个\n" +
                     "已存在: " + alreadyBlockedCount + " 个\n\n" +
                     "这些内容将不再在任何TMDB榜单中显示。",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      });
    }
    
    return resultItems;
    
  } catch (error) {
    return [{
      id: "error",
      type: "error",
      title: "❌ 搜索失败",
      description: "错误信息: " + error.message,
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "error"
    }];
  }
}

async function manageBlockedItems(params) {
  const action = params.action || "view";
  
  if (action === "unblock") {
    const unblockId = params.unblock_id ? params.unblock_id.trim() : '';
    const mediaType = params.unblock_media_type || "tv";
    
    if (!unblockId) {
      return [{
        id: "no_unblock_id",
        type: "info",
        title: "❓ 请输入要取消屏蔽的ID",
        description: "在上方输入框中输入要取消屏蔽的TMDB ID，然后重新运行。",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (!/^\d+$/.test(unblockId)) {
      return [{
        id: "invalid_unblock_id",
        type: "error",
        title: "❌ 无效的ID格式",
        description: "TMDB ID应该是纯数字，例如：2190、550",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }

    const success = removeBlockedItem(unblockId, mediaType);
    const mediaTypeText = mediaType === "movie" ? "电影" : "剧集";
    
    return [{
      id: "unblock_result",
      type: "info",
      title: success ? "✅ 取消屏蔽成功" : "❌ 操作失败",
      description: success ? 
        mediaTypeText + " ID " + unblockId + " 已从黑名单中移除，将重新在榜单中显示。" : 
        "未找到ID为 " + unblockId + " 的" + mediaTypeText + "，或取消屏蔽时出现错误。",
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    }];
  }
  
  if (action === "clear") {
    const success = clearBlockedItems();
    return [{
      id: "clear_result",
      type: "info",
      title: success ? "✅ 黑名单已清空" : "❌ 清空失败",
      description: success ? "所有屏蔽项已被移除，Widget存储已清空" : "清空黑名单时出现错误",
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    }];
  }

  if (action === "export") {
    const blockedItems = getBlockedItems();
    const idList = blockedItems.map(item => item.id).join(',');
    
    return [{
      id: "export_result",
      type: "info",
      title: "📤 导出屏蔽配置",
      description: `当前屏蔽的ID列表（${blockedItems.length}个）：\n\n${idList || '无'}`,
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    }];
  }

  if (action === "import") {
    const importData = params.import_data ? params.import_data.trim() : '';
    if (!importData) {
      return [{
        id: "import_empty",
        type: "info",
        title: "❓ 请输入导入数据",
        description: "在上方输入框中输入要导入的TMDB ID列表（用逗号分隔），然后重新运行。",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    try {
      let cleanedData = importData;
      
      cleanedData = cleanedData.replace(/['"]/g, '');
      
      const idArray = cleanedData.split(',');
      const ids = [];
      for (let i = 0; i < idArray.length; i++) {
        const id = idArray[i].trim();
        if (/^\d+$/.test(id)) {
          ids.push(id);
        }
      }
      
      let importedCount = 0;
      const blockedItems = getBlockedItems();

      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const exists = blockedItems.some(item => item.id === id);
        if (!exists) {
          blockedItems.push({
            id: id,
            media_type: "movie",
            title: `TMDB ID: ${id}`,
            poster_path: "",
            overview: "通过ID导入的屏蔽项",
            blocked_date: new Date().toISOString(),
            vote_average: 0
          });
          importedCount++;
        }
      }

      const success = saveBlockedItems(blockedItems);
      
      return [{
        id: "import_result",
        type: "info",
        title: success ? `✅ 导入成功` : "❌ 导入失败",
        description: success ? 
          `成功导入 ${importedCount} 个新的屏蔽项，总计 ${blockedItems.length} 个屏蔽项` :
          "导入过程中出现错误",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    } catch (error) {
      return [{
        id: "import_error",
        type: "error",
        title: "❌ 导入失败",
        description: `错误信息: ${error.message}`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }
  }
  
  const blockedItems = getBlockedItems();
  
  if (blockedItems.length === 0) {
    return [{
      id: "empty_list",
      type: "info",
      title: "黑名单为空",
      description: "当前没有屏蔽任何内容。使用\"🚫 搜索屏蔽\"功能添加要屏蔽的影片。",
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    }];
  }

  const sortedItems = [];
  for (let i = 0; i < blockedItems.length; i++) {
    sortedItems.push(blockedItems[i]);
  }
  
  sortedItems.sort(function(a, b) {
    return new Date(b.blocked_date) - new Date(a.blocked_date);
  });

  const resultItems = [];
  
  if (sortedItems.length > 0) {
    resultItems.push({
      id: "unblock_help",
      type: "info",
      title: "💡 取消屏蔽说明",
      description: "要取消屏蔽某个内容，请：📝 记住要取消的TMDB ID,⚙️ 选择\"取消屏蔽\"操作, ✏️ 输入对应的ID和媒体类型",
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    });
  }
  
  for (let i = 0; i < sortedItems.length; i++) {
    const item = sortedItems[i];
    const mediaTypeText = item.media_type === "movie" ? "电影" : "剧集";
    const blockedDate = new Date(item.blocked_date).toLocaleDateString();
    const ratingText = item.vote_average ? " ⭐" + item.vote_average.toFixed(1) : "";
    
    resultItems.push({
      id: "blocked_" + item.id + "_" + item.media_type,
      type: "blocked_item",
      title: "🚫 " + item.title,
      description: mediaTypeText + ratingText + " | TMDB ID: " + item.id + " | 屏蔽于: " + blockedDate + "\n" + (item.overview || "暂无简介"),
      posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
      backdropPath: "",
      rating: item.vote_average || 0,
      mediaType: item.media_type,
      tmdbId: item.id,
      tmdbMediaType: item.media_type
    });
  }
  
  return resultItems;
}

async function loadDetail(link) {
  try {
    if (link.startsWith("block://")) {
      const parts = link.replace("block://", "").split("/");
      const [id, mediaType, encodedTitle] = parts;
      const title = decodeURIComponent(encodedTitle);
      
      const endpoint = mediaType === "movie" ? "/movie/" + id : "/tv/" + id;
      
      const response = await Widget.tmdb.get(endpoint, {
        params: { language: "zh-CN" }
      });

      let item = null;
      if (response && response.data) {
        item = response.data;
      } else if (response && (response.title || response.name)) {
        item = response;
      } else {
        throw new Error("无法解析详情响应结构");
      }
      const blockItem = {
        id: id,
        media_type: mediaType,
        title: item.title || item.name,
        poster_path: item.poster_path,
        overview: item.overview,
        vote_average: item.vote_average
      };

      const success = addBlockedItem(blockItem);
      const mediaTypeText = mediaType === "movie" ? "电影" : "剧集";
      const ratingText = item.vote_average ? ` ⭐${item.vote_average.toFixed(1)}` : "";
      
      return {
        videoUrl: "",
        title: success ? "✅ 屏蔽成功" : "ℹ️ 已存在",
        description: success ? 
          `${mediaTypeText}"${title}"${ratingText}已添加到黑名单，将不再在应用中显示。\n\n数据已保存到Widget.storage中，所有榜单都会自动过滤此内容。` : 
          `${mediaTypeText}"${title}"${ratingText}已在黑名单中。`
      };
      
    } else if (link.startsWith("unblock://")) {
      const parts = link.replace("unblock://", "").split("/");
      const [id, mediaType, encodedTitle] = parts;
      const title = decodeURIComponent(encodedTitle);
      
      const success = removeBlockedItem(id, mediaType);
      const mediaTypeText = mediaType === "movie" ? "电影" : "剧集";
      
      return {
        videoUrl: "",
        title: success ? "✅ 取消屏蔽成功" : "❌ 操作失败",
        description: success ? 
          `${mediaTypeText}"${title}"已从黑名单中移除，将重新在应用中显示。\n\nWidget.storage已更新，所有榜单将重新显示此内容。` : 
          `取消屏蔽${mediaTypeText}"${title}"时出现错误。`
      };
    }
    
    return {
      videoUrl: "",
      title: "❌ 无效操作",
      description: "无法识别的操作类型，请使用屏蔽管理器中的功能。"
    };
    
  } catch (error) {
    return {
      videoUrl: "",
      title: "❌ 操作失败", 
      description: `错误信息: ${error.message}`
    };
  }
}

// ===============豆瓣功能函数===============
async function loadDoubanItemsFromApi(params = {}) {
  const { start, limit } = calculatePagination(params);
  const url = params.url;
  const apiUrl = `${url}?start=${start}&count=${limit}&updated_at&items_only=1&for_mobile=1`;
  const listIdMatch = params.url.match(/subject_collection\/(\w+)/);
  const referer = listIdMatch ? `https://m.douban.com/subject_collection/${listIdMatch[1]}/` : 'https://m.douban.com/';
  const response = await Widget.http.get(apiUrl, {
    headers: {
      Referer: referer,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    },
  });
  
  const items = response.data.subject_collection_items;
  const processedItems = items.map((item) => {
    let genres = item.genres;
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        const textToExtract = [
            item.card_subtitle,
            item.description,
            item.abstract
        ].filter(Boolean).join(' ');
        
        if (textToExtract) {
            const extractedGenres = extractGenresFromText(textToExtract);
            if (extractedGenres.length > 0) {
                genres = extractedGenres;
            }
        }
    }
   
    return {
      id: item.id,
      type: "douban",
      title: item.title,
      coverUrl: item.cover?.url,
      description: formatItemDescription({
          description: item.card_subtitle || item.description,
          rating: item.rating?.value,
          releaseDate: item.year
      }),
      rating: item.rating?.value,
      releaseDate: item.year,
      genreTitle: getDoubanGenreTitles(genres || [], null)
    };
  });
  
  return filterBlockedItems(processedItems);
}

async function loadDoubanHotList(params = {}) {
  const url = params.url;
  
  const uriMatch = url.match(/uri=([^&]+)/);
  if (!uriMatch) {
    throw new Error("\u65e0\u6cd5\u89e3\u6790\u8c46\u74e3dispatch URL");
  }
  
  const uri = decodeURIComponent(uriMatch[1]);
  const collectionMatch = uri.match(/\/subject_collection\/([^\/]+)/);
  if (!collectionMatch) {
    throw new Error("\u65e0\u6cd5\u4ece URI\u4e2d\u63d0\u53d6collection ID");
  }
  
  const collectionId = collectionMatch[1];
  
  const apiUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/${collectionId}/items?updated_at&items_only=1&for_mobile=1`;
  const referer = `https://m.douban.com/subject_collection/${collectionId}/`;
  
  const response = await Widget.http.get(apiUrl, {
    headers: {
      Referer: referer,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    },
  });
  
  if (!response.data || !response.data.subject_collection_items) {
    throw new Error("\u83b7\u53d6\u8c46\u74e3\u70ed\u699c\u6570\u636e\u5931\u8d25");
  }
  
  const items = response.data.subject_collection_items;
  
  const processedItems = items.map((item) => {
    let genres = item.genres;
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        const textToExtract = [
            item.card_subtitle,
            item.description,
            item.abstract
        ].filter(Boolean).join(' ');
        
        if (textToExtract) {
            const extractedGenres = extractGenresFromText(textToExtract);
            if (extractedGenres.length > 0) {
                genres = extractedGenres;
            }
        }
    }
    
    const itemType = determineItemType(item, params.type);
   
    return {
      id: item.id,
      type: "douban",
      title: item.title,
      coverUrl: item.cover?.url,
      description: formatItemDescription({
          description: item.card_subtitle || item.description,
          rating: item.rating?.value,
          releaseDate: item.year,
          itemType: itemType
      }),
      rating: item.rating?.value,
      releaseDate: item.year,
      genreTitle: getDoubanGenreTitles(genres || [], itemType),
      itemType: itemType
    };
  });
  
  return filterBlockedItems(processedItems);
}

function determineItemType(item, paramType) {
  if (paramType === "movie") return "\u7535\u5f71";
  if (paramType === "tv") return "\u5267\u96c6";
  if (paramType === "subject") {
    if (item.subtype === "movie") return "\u7535\u5f71";
    
    const cardSubtitle = item.card_subtitle || "";
    if (cardSubtitle.includes("\u7535\u5f71")) return "\u7535\u5f71";
    if (cardSubtitle.includes("\u5267\u96c6") || cardSubtitle.includes("\u7535\u89c6\u5267")) return "\u5267\u96c6";
    
    return "\u7efc\u5408";
  }
  return "\u672a\u77e5";
}

function detectMultiTypeItems(items) {
  const titleTypeMap = new Map();
  
  for (const item of items) {
    const title = item.title.trim();
    if (!titleTypeMap.has(title)) {
      titleTypeMap.set(title, new Set());
    }
    
    let itemType = item.type;
    if (item.subtype) {
      itemType = item.subtype;
    }
    
    titleTypeMap.get(title).add(itemType);
  }
  
  const multiTypesTitles = new Set();
  for (const [title, types] of titleTypeMap.entries()) {
    if (types.size > 1) {
      const hasMovieOrTv = types.has('movie') || types.has('tv');
      if (hasMovieOrTv) {
        multiTypesTitles.add(title);
      }
    }
  }
  
  return items.map(item => {
    const title = item.title.trim();
    const isMultiType = multiTypesTitles.has(title);
    
    return {
      ...item,
      shouldUseMultiTypeMatching: isMultiType
    };
  });
}

function detectItemTypeFromContent(item) {
  const aliases = (item.original_title || item.aka || item.alternate_title || "").toLowerCase();
  if (aliases.includes("\u7535\u5f71\u7248") || aliases.includes("(\u7535\u5f71)") || aliases.includes("movie")) {
    return "movie";
  }
  if (aliases.includes("\u7535\u89c6\u5267\u7248") || aliases.includes("(\u7535\u89c6\u5267)") || aliases.includes("tv") || aliases.includes("series")) {
    return "tv";
  }
  
  const description = (item.card_subtitle || item.description || item.abstract || "").toLowerCase();
  const title = (item.title || "").toLowerCase();
  
  if (description.includes("\u7535\u5f71") && !description.includes("\u7535\u89c6") && !description.includes("\u5267")) {
    return "movie";
  }
  
  if (description.includes("\u7535\u89c6\u5267") || description.includes("\u5267\u96c6") || description.includes("\u96c6\u6570") || 
      description.includes("\u5b63") || description.includes("\u5168") && description.includes("\u96c6")) {
    return "tv";
  }
  
  if (description.includes("\u52a8\u753b") || title.includes("\u52a8\u753b") || 
      description.includes("\u756a\u5267") || description.includes("anime") ||
      description.includes("animation") || aliases.includes("\u52a8\u753b")) {
    
    if (description.includes("\u7535\u5f71") || title.includes("\u7535\u5f71") || 
        description.includes("\u5267\u573a\u7248") || title.includes("\u5267\u573a\u7248")) {
      return "movie";
    }
    
    if (description.includes("\u756a\u5267") || description.includes("\u7b2c") && description.includes("\u5b63") ||
        description.includes("\u96c6") && !description.includes("\u7535\u5f71") ||
        description.includes("tv") || description.includes("series")) {
      return "tv";
    }
    
    return "multi";
  }
  
  if (description.includes("\u5206\u949f") || description.includes("min") || description.includes("\u5c0f\u65f6")) {
    return "movie";
  }
  
  if (title.includes("\u7535\u5f71\u7248")) {
    return "movie";
  }
  if (title.includes("\u7535\u89c6\u5267\u7248") || title.includes("\u5267\u7248")) {
    return "tv";
  }
  
  return null;
}

function detectAndAssignTypePreferences(items) {
  const titleItemsMap = new Map();
  
  for (const item of items) {
    const title = item.title.trim();
    if (!titleItemsMap.has(title)) {
      titleItemsMap.set(title, []);
    }
    titleItemsMap.get(title).push(item);
  }
  
  const multiItemTitles = new Set();
  for (const [title, titleItems] of titleItemsMap.entries()) {
    if (titleItems.length > 1) {
      const hasMultipleTypes = titleItems.some((item, index) => {
        const otherItems = titleItems.filter((_, i) => i !== index);
        const itemType = detectItemTypeFromContent(item);
        return otherItems.some(otherItem => {
          const otherType = detectItemTypeFromContent(otherItem);
          return itemType && otherType && itemType !== otherType;
        });
      });
      
      if (hasMultipleTypes) {
        multiItemTitles.add(title);
      } else {
        multiItemTitles.add(title);
      }
    }
  }
  
  const itemsWithPreferences = [];
  const processedTitles = new Map();
  
  for (const item of items) {
    const title = item.title.trim();
    const isMultiTypeTitle = multiItemTitles.has(title);
    
    let assignedTypePreference = null;
    
    if (isMultiTypeTitle) {
      if (!processedTitles.has(title)) {
        processedTitles.set(title, []);
      }
      
      const sameTitle = processedTitles.get(title);
      const currentCount = sameTitle.length;
      
      if (currentCount === 0) {
        assignedTypePreference = "movie";
      } else if (currentCount === 1) {
        assignedTypePreference = "tv";
      }
      
      sameTitle.push(item.id);
    }
    
    itemsWithPreferences.push({
      ...item,
      isMultiTypeTitle: isMultiTypeTitle,
      assignedTypePreference: assignedTypePreference
    });
  }
  
  return itemsWithPreferences;
}

async function fetchTmdbDataForDouban(key, mediaType) {
    let searchTypes = [];
    
    if (mediaType === "movie") {
        searchTypes = ["movie"];
    } else if (mediaType === "tv") {
        searchTypes = ["tv"];
    } else if (mediaType === "multi") {
        searchTypes = ["movie", "tv"];
    } else {
        searchTypes = ["movie", "tv"];
    }
    
    const allResults = [];
    
    for (const type of searchTypes) {
        try {
            const tmdbResults = await Widget.tmdb.get(`/search/${type}`, {
                params: {
                    query: key,
                    language: "zh_CN",
                }
            });
            
            if (tmdbResults.results && tmdbResults.results.length > 0) {
                const resultsWithType = tmdbResults.results.map(result => ({
                    ...result,
                    media_type: type
                }));
                allResults.push(...resultsWithType);
            }
        } catch (error) {
        }
    }
    
    return allResults;
}

function calculateSimilarity(str1, str2) {
    const cleanStr1 = str1.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, '');
    
    if (cleanStr1 === cleanStr2) return 1.0;
    
    const longer = cleanStr1.length > cleanStr2.length ? cleanStr1 : cleanStr2;
    const shorter = cleanStr1.length > cleanStr2.length ? cleanStr2 : cleanStr1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

function getEditDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

function selectMatches(tmdbResults, originalTitle, originalYear, options = {}) {
    if (tmdbResults.length === 0) return options.returnArray ? [] : null;
    
    const {
        returnArray = false,
        preferredType = null,
        minThreshold = 0.7,
        doubanItem = null
    } = options;
    
    let actualPreferredType = preferredType;
    if (!actualPreferredType && doubanItem) {
        const detectedType = detectItemTypeFromContent(doubanItem);
        if (detectedType) {
            actualPreferredType = detectedType;
        } else if (doubanItem.subtype === "movie") {
            actualPreferredType = "movie";
        } else if (doubanItem.subtype === "tv") {
            actualPreferredType = "tv";
        }
    }
    
    if (!returnArray) {
        if (tmdbResults.length === 1) return tmdbResults[0];
        
        let bestMatch = null;
        let bestScore = 0;
        
        for (const result of tmdbResults) {
            let score = calculateMatchScore(result, originalTitle, originalYear);
            
            if (actualPreferredType && result.media_type === actualPreferredType) {
                score += 1.0;
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestMatch = result;
            }
        }
        
        return bestMatch;
    } else {
        const resultsByType = {};
        for (const result of tmdbResults) {
            const mediaType = result.media_type;
            if (!resultsByType[mediaType]) {
                resultsByType[mediaType] = [];
            }
            resultsByType[mediaType].push(result);
        }
        
        const bestMatches = [];
        for (const [mediaType, results] of Object.entries(resultsByType)) {
            const bestMatch = selectMatches(results, originalTitle, originalYear, { preferredType: mediaType });
            if (bestMatch) {
                const score = calculateMatchScore(bestMatch, originalTitle, originalYear);
                if (score >= minThreshold) {
                    bestMatches.push(bestMatch);
                }
            }
        }
        
        bestMatches.sort((a, b) => {
            const scoreA = calculateMatchScore(a, originalTitle, originalYear);
            const scoreB = calculateMatchScore(b, originalTitle, originalYear);
            return scoreB - scoreA;
        });
        
        return bestMatches;
    }
}

function calculateMatchScore(result, originalTitle, originalYear) {
    const tmdbTitle = result.title || result.name || '';
    const originalName = result.original_title || result.original_name || '';
    
    const titleSimilarity = Math.max(
        calculateSimilarity(originalTitle, tmdbTitle),
        calculateSimilarity(originalTitle, originalName)
    );
    
    let exactMatchBonus = 0;
    if (titleSimilarity >= 0.98) {
        exactMatchBonus = 2.0;
    } else if (titleSimilarity >= 0.9) {
        exactMatchBonus = 1.0;
    }
    
    let yearBonus = 0;
    if (originalYear) {
        const tmdbYear = (result.release_date || result.first_air_date || '').substring(0, 4);
        if (tmdbYear && Math.abs(parseInt(originalYear) - parseInt(tmdbYear)) <= 1) {
            yearBonus = 0.2;
        }
    }
    
    const popularityBonus = Math.min(result.popularity / 10000, 0.05);
    const ratingBonus = Math.min(result.vote_average / 200, 0.025);
    
    return titleSimilarity + exactMatchBonus + yearBonus + popularityBonus + ratingBonus;
}

function generateGenreTitleFromTmdb(tmdbItem, doubanItem) {
    let genres = doubanItem.genres;
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        const textToExtract = [
            doubanItem.card_subtitle,
            doubanItem.description,
            doubanItem.abstract
        ].filter(Boolean).join(' ');
        
        if (textToExtract) {
            const extractedGenres = extractGenresFromText(textToExtract);
            if (extractedGenres.length > 0) {
                genres = extractedGenres;
            }
        }
    }
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        if (tmdbItem.genre_ids && tmdbItem.genre_ids.length > 0) {
            genres = tmdbItem.genre_ids.map(id => mapTmdbGenreIdToChineseName(id)).filter(Boolean);
        }
    }
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        return "";
    }
    
    return getDoubanGenreTitles(genres, determineItemType(doubanItem, doubanItem.type));
}

function mapTmdbGenreIdToChineseName(genreId) {
    const genreMap = {
        28: "\u52a8\u4f5c", 12: "\u5192\u9669", 16: "\u52a8\u753b", 35: "\u559c\u5267", 80: "\u72af\u7f6a",
        99: "\u7eaa\u5f55\u7247", 18: "\u5267\u60c5", 10751: "\u5bb6\u5ead", 14: "\u5947\u5e7b", 36: "\u5386\u53f2",
        27: "\u6050\u6016", 10402: "\u97f3\u4e50", 9648: "\u60ac\u7591", 10749: "\u7231\u60c5", 878: "\u79d1\u5e7b",
        10770: "\u7535\u89c6\u7535\u5f71", 53: "\u60ca\u609a", 10752: "\u6218\u4e89", 37: "\u897f\u90e8",
        
        10759: "\u52a8\u4f5c\u5192\u9669", 16: "\u52a8\u753b", 35: "\u559c\u5267", 80: "\u72af\u7f6a", 99: "\u7eaa\u5f55\u7247",
        18: "\u5267\u60c5", 10751: "\u5bb6\u5ead", 10762: "\u513f\u7ae5", 9648: "\u60ac\u7591", 10763: "\u65b0\u95fb",
        10764: "\u771f\u4eba\u79c0", 10765: "\u79d1\u5e7b\u5947\u5e7b", 10766: "\u80a5\u7682\u5267", 10767: "\u8131\u53e3\u79c0",
        10768: "\u6218\u4e89\u653f\u6cbb", 37: "\u897f\u90e8"
    };
    
    return genreMap[genreId] || null;
}

async function fetchImdbItemsForDouban(scItems) {
    const promises = scItems.map(async (scItem) => {
        const titleNormalizationRules = [
            { pattern: /^\u51e1\u4eba\u4fee\u4ed9\u4f20[\uff1a:]\u91cd\u8fd4\u5929\u5357/, replacement: '\u51e1\u4eba\u4fee\u4ed9\u4f20', forceFirstResult: true },
            { pattern: /^\u7f57\u5c0f\u9ed1\u6218\u8bb0/, replacement: '\u7f57\u5c0f\u9ed1\u6218\u8bb0', forceMovieType: true },
            { pattern: /^\u7d2b\u5ddd \u7b2c\u4e8c\u5b63/, replacement: '\u7d2b\u5ddd', forceFirstResult: true },
            { pattern: /^\u661f\u671f\u4e09 \u7b2c\u4e8c\u5b63/, replacement: 'Wednesday', forceFirstResult: true, forceTypeFilter: 'tv' },
            { pattern: /^\u5343\u4e0e\u5343\u5bfb/, replacement: '\u5343\u4e0e\u5343\u5bfb', forceMovieType: true },
            { pattern: /^\u54c8\u5c14\u7684\u79fb\u52a8\u57ce\u5821/, replacement: '\u54c8\u5c14\u7684\u79fb\u52a8\u57ce\u5821', forceMovieType: true },
            { pattern: /^\u9b3c\u706d\u4e4b\u5203/, replacement: '\u9b3c\u706d\u4e4b\u5203', forceMovieType: true },
            { pattern: /^\u5929\u6c14\u4e4b\u5b50/, replacement: '\u5929\u6c14\u4e4b\u5b50', forceMovieType: true },
            { pattern: /^\u5742\u672c\u65e5\u5e38 Part 2/, replacement: '\u5742\u672c\u65e5\u5e38' },
            { pattern: /^\u6ca7\u5143\u56fe2 \u5143\u521d\u5c71\u756a\u5916\u7bc7/, replacement: '\u6ca7\u5143\u56fe' },
            { pattern: /^\u82cd\u5170\u8bc02 \u5f71\u4e09\u754c\u7bc7/, replacement: '\u82cd\u5170\u8bc0 \u52a8\u753b\u7248', forceFirstResult: true },
            { pattern: /^\u77f3\u7eaa\u5143 \u7b2c\u56db\u5b63 Part 2/, replacement: '\u77f3\u7eaa\u5143' },
            { pattern: /^\u53cc\u4eba\u72ec\u81ea\u9732\u8425/, replacement: 'ふたりソロキャンプ' },
            { pattern: /^\u5730\u7f1a\u5c11\u5e74\u82b1\u5b50\u541b \u7b2c\u4e8c\u5b63 \u540e\u7bc7/, replacement: '\u5730\u7f1a\u5c11\u5e74\u82b1\u5b50\u541b' },
            { pattern: /^\u66f4\u8863\u4eba\u5076\u5760\u5165\u7231\u6cb3 \u7b2c\u4e8c\u5b63/, replacement: '\u66f4\u8863\u4eba\u5076\u5760\u5165\u7231\u6cb3', forceFirstResult: true },
            { pattern: /^\u574f\u5973\u5b69/, replacement: '\u4e0d\u826f\u5c11\u5973' },
            { pattern: /^\u82b1\u513f\u4e0e\u5c11\u5e74·\u540c\u5fc3\u5b63/, replacement: '\u82b1\u513f\u4e0e\u5c11\u5e74·\u540c\u5fc3\u5b63', forceFirstResult: true },
            { pattern: /^\u5954\u8dd1\u5427 \u7b2c\u4e5d\u5b63/, replacement: '\u5954\u8dd1\u5427!\u5144\u5f1f', forceFirstResult: true },
            { pattern: /^\u4e58\u98ce2025/, replacement: '\u4e58\u98ce2025', forceFirstResult: true },
            { pattern: /^\u4f60\u7684\u7231$/, replacement: '\ub108\uc758\uc5f0\uc560', forceFirstResult: true },
            { pattern: /^\u771f\u7684\u662f\u5f88\u4e0d\u9519\u7684\u4eba/, replacement: '\uc9c4\uc9dc \uad1c\ucc2e\uc740 \uc0ac\ub78c', forceFirstResult: true },
            { pattern: /^\u6700\u540e\u590d\u6d3b\u6218/, replacement: '\u30d5\u30a1\u30a4\u30ca\u30eb\u30c9\u30e9\u30d5\u30c8', forceFirstResult: true },
            { pattern: /^\u66b4\u98ce\u5708/, replacement: '\ubd81\uadf9\uc131', forceFirstResult: true },
            { pattern: / \u7b2c[^\u5b63]*\u5b63/, replacement: '' },
            { pattern: /^(\u6b4c\u624b|\u5168\u5458\u52a0\u901f\u4e2d)\d{4}$/, replacement: (match, showName) => {
                const showMap = {
                    '\u6b4c\u624b': '\u6211\u662f\u6b4c\u624b',
                    '\u5168\u5458\u52a0\u901f\u4e2d': '\u5168\u5458\u52a0\u901f\u4e2d'
                };
                return showMap[showName] || showName;
            }},
            { pattern: /^\u5954\u8dd1\u5427(?! ?\u5144\u5f1f)/, replacement: '\u5954\u8dd1\u5427\u5144\u5f1f' },
            { pattern: /^(.+?[^0-9])\d+$/, replacement: (match, baseName) => {
                if (/^(\u6b4c\u624b|\u5168\u5458\u52a0\u901f\u4e2d)\d{4}$/.test(match)) {
                    return match;
                }
                return baseName;
            }},
            { pattern: /^([^·]+)·(.*)$/, replacement: (match, part1, part2) => {
                if (part2 && !/^(\u6162\u4eab\u5b63|\u7b2c.*\u5b63)/.test(part2)) {
                    return part1 + part2;
                }
                return part1;
            }}
        ];
        
        let title = scItem.title;
        let forceFirstResult = false;
        let forceMovieType = false;
        let forceTypeFilter = null;
        
        for (const rule of titleNormalizationRules) {
            if (rule.pattern.test(title)) {
                if (typeof rule.replacement === 'function') {
                    title = title.replace(rule.pattern, rule.replacement);
                } else {
                    title = title.replace(rule.pattern, rule.replacement);
                }
                if (rule.forceFirstResult) {
                    forceFirstResult = true;
                }
                if (rule.forceMovieType) {
                    forceMovieType = true;
                }
                if (rule.forceTypeFilter) {
                    forceTypeFilter = rule.forceTypeFilter;
                }
                break;
            }
        }
        
        let year = null;
        if (scItem.year) {
            year = String(scItem.year);
        } else if (scItem.card_subtitle) {
            const yearMatch = scItem.card_subtitle.match(/(\d{4})/);
            if (yearMatch) year = yearMatch[1];
        }

        let searchType = scItem.type;
        
        if (forceMovieType) {
            searchType = "movie";
        } else {
            let detectedType = detectItemTypeFromContent(scItem);
            
            if (scItem.type === "multi") {
                if (detectedType) {
                    searchType = detectedType;
                } else if (scItem.subtype && (scItem.subtype === "movie" || scItem.subtype === "tv")) {
                    searchType = scItem.subtype;
                } else {
                    searchType = "multi";
                }
            }
        }
        
        const tmdbDatas = await fetchTmdbDataForDouban(title, searchType);

        if (tmdbDatas.length !== 0) {
            
            if (scItem.isMultiTypeTitle) {
                const allMatches = selectMatches(tmdbDatas, title, year, { 
                    returnArray: true, 
                    doubanItem: scItem
                });

                return allMatches
                    .filter(match => {
                        return match.poster_path &&
                               match.id &&
                               (match.title || match.name) &&
                               (match.title || match.name).trim().length > 0;
                    })
                    .map(match => ({
                        id: match.id,
                        type: "tmdb",
                        title: match.title ?? match.name,
                        description: match.overview,
                        releaseDate: match.release_date ?? match.first_air_date,
                        backdropPath: match.backdrop_path,
                        posterPath: match.poster_path,
                        rating: match.vote_average,
                        mediaType: match.media_type,
                        genreTitle: generateGenreTitleFromTmdb(match, scItem),
                        originalDoubanTitle: scItem.title,
                        originalDoubanYear: scItem.year,
                        originalDoubanId: scItem.id
                    }));
            } else {
                let bestMatch;
                
                if (forceFirstResult && tmdbDatas.length > 0) {
                    if (forceTypeFilter) {
                        bestMatch = tmdbDatas.find(item => item.media_type === forceTypeFilter) || tmdbDatas[0];
                    } else {
                        bestMatch = tmdbDatas[0];
                    }
                } else {
                    bestMatch = selectMatches(tmdbDatas, title, year, { 
                        doubanItem: scItem
                    });
                }
                
                if (bestMatch && bestMatch.poster_path && bestMatch.id && 
                    (bestMatch.title || bestMatch.name) && 
                    (bestMatch.title || bestMatch.name).trim().length > 0) {
                    return {
                        id: bestMatch.id,
                        type: "tmdb",
                        title: bestMatch.title ?? bestMatch.name,
                        description: bestMatch.overview,
                        releaseDate: bestMatch.release_date ?? bestMatch.first_air_date,
                        backdropPath: bestMatch.backdrop_path,
                        posterPath: bestMatch.poster_path,
                        rating: bestMatch.vote_average,
                        mediaType: bestMatch.media_type,
                        genreTitle: generateGenreTitleFromTmdb(bestMatch, scItem),
                        originalDoubanTitle: scItem.title,
                        originalDoubanYear: scItem.year,
                        originalDoubanId: scItem.id
                    };
                }
            }
        }
        return null;
    });

    const results = await Promise.all(promises);
    
    const allItems = [];
    for (const result of results) {
        if (result) {
            if (Array.isArray(result)) {
                allItems.push(...result);
            } else {
                allItems.push(result);
            }
        }
    }
    
    return filterBlockedItems(allItems);
}

async function loadEnhancedDoubanList(params = {}) {
    const url = params.url;
    
    if (url.includes("douban.com/doulist/")) {
        return loadEnhancedDefaultList(params);
    } 
    else if (url.includes("douban.com/subject_collection/")) {
        return loadEnhancedSubjectCollection(params);
    } 
    else if (url.includes("m.douban.com/doulist/")) {
        const desktopUrl = url.replace("m.douban.com", "www.douban.com");
        return loadEnhancedDefaultList({ ...params, url: desktopUrl });
    }
    else if (url.includes("douban.com/doubanapp/dispatch")) {
        const parsedUrl = parseDoubanAppDispatchUrl(url);
        return loadEnhancedDoubanList({ ...params, url: parsedUrl });
    }
    
    return [];
}

async function loadEnhancedDefaultList(params = {}) {
    const url = params.url;
    const listId = url.match(/doulist\/(\d+)/)?.[1];
    const page = params.page || 1;
    const count = 25;
    const start = (page - 1) * count;
    const pageUrl = `https://www.douban.com/doulist/${listId}/?start=${start}&sort=seq&playable=0&sub_type=`;

    const response = await Widget.http.get(pageUrl, {
        headers: {
            Referer: `https://movie.douban.com/explore`,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
    });

    const docId = Widget.dom.parse(response.data);
    const videoElementIds = Widget.dom.select(docId, ".doulist-item .title a");

    let doubanItems = [];
    for (const itemId of videoElementIds) {
        const link = await Widget.dom.attr(itemId, "href");
        const text = await Widget.dom.text(itemId);
        const chineseTitle = text.trim().split(' ')[0];
        if (chineseTitle) {
            doubanItems.push({ title: chineseTitle, type: "multi" });
        }
    }

    return await fetchImdbItemsForDouban(doubanItems);
}

async function loadEnhancedItemsFromApi(params = {}) {
    const url = params.url;
    const listId = params.url.match(/subject_collection\/(\w+)/)?.[1];
    const response = await Widget.http.get(url, {
        headers: {
            Referer: `https://m.douban.com/subject_collection/${listId}/`,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
    });

    const scItems = response.data.subject_collection_items;
    return await fetchImdbItemsForDouban(scItems);
}

async function loadEnhancedSubjectCollection(params = {}) {
    const listId = params.url.match(/subject_collection\/(\w+)/)?.[1];
    const page = params.page || 1;
    const count = 20;
    const start = (page - 1) * count;
    
    let pageUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/${listId}/items?start=${start}&count=${count}&updated_at&items_only=1&type_tag&for_mobile=1`;
    if (params.type) {
        pageUrl += `&type=${params.type}`;
    }
    
    return await loadEnhancedItemsFromApi({ ...params, url: pageUrl });
}