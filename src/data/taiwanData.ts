import { Destination } from '../types/travel';

const RAW_DESTINATIONS: Destination[] = [
  // 北部地區
  {
    id: 'taipei',
    name: '台北市',
    englishName: 'Taipei',
    region: 'north',
    regionName: '北部地區',
    tagline: '不夜魔幻都會 · 巷弄咖啡與老城光影',
    vibeTags: ['捷運暢遊', '藝文展演', '深夜食堂', '古蹟新生'],
    durationCategory: '1day',
    durationText: '一日漫步～二天一夜',
    recommendedSeason: '四季皆宜（秋日芒草與冬夜溫泉最佳）',
    description: '台灣首善之都，融合了百年大稻埕閩南巴洛克洋樓、信義區璀璨天際線與遍布街角的高水準獨立咖啡店。便捷的捷運網絡串聯夜市小吃與世界級國家博物館。',
    mapCoords: { x: 382, y: 122 },
    climateTip: '盆地氣候夏季悶熱、冬季偶有陣雨，建議隨身攜帶輕便摺疊傘與悠遊卡。',
    transportTips: '台北捷運與YouBike極度方便，近郊如陽明山、貓空皆有公車直達。',
    accentColor: '#0ea5e9',
    gradient: 'from-sky-500 to-blue-600',
    styles: ['urban', 'food', 'culture'],
    attractions: [
      {
        id: 'taipei-dadaocheng',
        name: '大稻埕迪化老街',
        category: '歷史文化',
        description: '走進清末與日治時期的南北貨與布莊街區，感受老宅茶行、中藥香與文創新聚落。',
        highlight: '霞海城隍廟祈求良緣、大稻埕碼頭貨櫃市集看夕陽',
        addressOrArea: '台北市大同區迪化街一段'
      },
      {
        id: 'taipei-yangmingshan',
        name: '陽明山國家公園與竹子湖',
        category: '自然秘境',
        description: '台北人的後花園，擁有火山地熱地質、春季海芋繡球花與秋季擎天崗銀白芒草步道。',
        highlight: '擎天崗草原野餐看水牛、小油坑地熱噴氣孔探秘',
        addressOrArea: '台北市北投區陽明山'
      },
      {
        id: 'taipei-songshan-cultural',
        name: '松山文創園區 & 誠品生活',
        category: '文創藝術',
        description: '原日治松山菸廠改建，融合生態綠地、文創選品店與全台首座24小時誠品書店。',
        highlight: '探訪文創設計展、漫步巴洛克中庭花園',
        addressOrArea: '台北市信義區光復南路'
      },
      {
        id: 'taipei-raohe-market',
        name: '饒河街觀光夜市',
        category: '夜市美食',
        description: '緊鄰松山慈祐宮，長達600公尺的直線型夜市，擁有獲米其林必比登推薦的多攤傳奇美食。',
        highlight: '剛出爐胡椒餅、藥燉排骨與彩虹橋夜景',
        addressOrArea: '台北市松山區饒河街'
      }
    ],
    delicacies: [
      { name: '福州世祖胡椒餅', description: '炭火老甕現烤，肉汁爆漿外皮酥脆香脆。', tags: ['排隊名店', '米其林必比登'] },
      { name: '紅燒半筋半肉牛肉麵', description: '濃郁牛骨豆瓣甘甜湯頭，牛筋滑嫩牛腩軟爛入口即化。', tags: ['台北代表', '老饕首選'] },
      { name: '鼎泰豐小籠小包', description: '極致18摺皮薄餡飽，鮮甜湯汁滿溢。', tags: ['國際知名', '精緻台菜'] }
    ]
  },
  {
    id: 'new-taipei',
    name: '新北市',
    englishName: 'New Taipei',
    region: 'north',
    regionName: '北部地區',
    tagline: '黃金山城秘境 · 蔚藍北海岸峽灣',
    vibeTags: ['山城懷舊', '蔚藍海景', '老街散策', '溫泉泡湯'],
    durationCategory: '2days',
    durationText: '二天一夜深度遊',
    recommendedSeason: '四季皆宜（秋高氣爽訪九份最浪漫）',
    description: '環繞台北市的遼闊大都會，擁有九份金瓜石的黃金傳奇、野柳女王頭奇岩地質，以及淡水河畔的浪漫夕陽與烏來泰雅族山林溫泉。',
    mapCoords: { x: 405, y: 138 },
    climateTip: '沿海與山區風勢較大且多雨，造訪山城建議穿著防滑好走平底鞋。',
    transportTips: '搭乘台鐵平溪深澳線走訪鐵道風情，北海岸可搭乘台灣好行公車。',
    accentColor: '#0284c7',
    gradient: 'from-blue-500 to-indigo-600',
    styles: ['nature', 'culture', 'food'],
    attractions: [
      {
        id: 'ntpc-jiufen',
        name: '九份老街與金瓜石十三層',
        category: '歷史文化',
        description: '依山傍海的採金山城，層疊紅燈籠拾級而上，遠眺基隆嶼與陰陽海奇景。',
        highlight: '阿妹茶樓品茗看海、金瓜石黃金博物館摸220kg大金磚',
        addressOrArea: '新北市瑞芳區基山街'
      },
      {
        id: 'ntpc-tamsui',
        name: '淡水漁人碼頭與紅毛城',
        category: '美拍打卡',
        description: '漫步荷蘭時代城堡，搭乘情人橋渡輪欣賞被譽為台灣最美夕陽的淡水暮色。',
        highlight: '傍晚沿金色水岸散步、品嚐道地阿給與魚丸湯',
        addressOrArea: '新北市淡水區觀海路'
      },
      {
        id: 'ntpc-wulai',
        name: '烏來溫泉與觀瀑台車',
        category: '休閒體驗',
        description: '搭乘懷舊迷你台車穿梭山谷，體驗無色無味的「美人湯」碳酸氫鈉泉。',
        highlight: '享用原住民竹筒飯、馬告烤香腸與觀賞烏來壯麗瀑布',
        addressOrArea: '新北市烏來區烏來街'
      }
    ],
    delicacies: [
      { name: '淡水阿給 & 魚酥', description: '油豆腐塞冬粉以魚漿封口，淋上特調甜辣醬汁。', tags: ['老街必吃', '平民小吃'] },
      { name: '九份現捏芋圓地瓜圓', description: '口感Q彈天然香甜，冷熱皆宜眺望海景品嘗。', tags: ['排隊熱門', '甜點首選'] },
      { name: '深坑現烤臭豆腐', description: '獨特炭烤香氣搭配酸甜泡菜與香菜。', tags: ['深坑老街', '在地名產'] }
    ]
  },
  {
    id: 'keelung',
    name: '基隆市',
    englishName: 'Keelung',
    region: 'north',
    regionName: '北部地區',
    tagline: '雨都港灣奇岩 · 澎湃現撈海鮮聖地',
    vibeTags: ['海港風情', '廟口老味道', '壯麗海蝕崖', '色彩屋碼頭'],
    durationCategory: '1day',
    durationText: '一日輕旅行',
    recommendedSeason: '春夏季晴朗好天氣最適合賞海景',
    description: '歷史悠久的大型天然港灣，擁有獲全球讚譽的廟口夜市百年攤位，更有「台版威尼斯」正濱漁港彩色屋與和平島百萬年海蝕奇岩地景。',
    mapCoords: { x: 425, y: 105 },
    climateTip: '雨都潮濕偶有雨，建議攜帶雨具，但海港雨中散步亦別有一番電影氛圍。',
    transportTips: '台北車站搭台鐵區間車40分鐘即抵基隆市中心，轉乘市區公車可到各沿海景點。',
    accentColor: '#0369a1',
    gradient: 'from-sky-600 to-cyan-700',
    styles: ['food', 'nature', 'urban'],
    attractions: [
      {
        id: 'keelung-zhengbin',
        name: '正濱漁港彩色屋 & 潮境公園',
        category: '美拍打卡',
        description: '繽紛色彩造就童話般港灣倒影，潮境公園更有巨型飛天掃帚與遼闊無敵海景。',
        highlight: '打卡台版威尼斯彩色屋、傍晚賞基隆嶼日落',
        addressOrArea: '基隆市中正區正濱路'
      },
      {
        id: 'keelung-night-market',
        name: '基隆廟口夜市',
        category: '夜市美食',
        description: '環繞奠濟宮展開，整齊黃色燈籠下匯集鼎邊趖、泡泡冰、營養三明治等百年美食。',
        highlight: '一條街吃遍70餘家傳承數代的經典台灣海鮮小吃',
        addressOrArea: '基隆市仁愛區仁三路'
      }
    ],
    delicacies: [
      { name: '百年邢記鼎邊趖', description: '在來米磨漿蒸製米糊，搭配肉羹、蝦仁羹與金針清甜高湯。', tags: ['廟口招牌', '百年傳承'] },
      { name: '廟口營養三明治', description: '炸得金黃香酥的長條麵包，夾入滷蛋、番茄、火腿與美乃滋。', tags: ['人氣排隊', '古早滋味'] },
      { name: '遠東泡泡冰', description: '手工以大匙現打現刨，花生與百香果綿密滑順。', tags: ['消暑聖品', '基隆必嘗'] }
    ]
  },
  {
    id: 'yilan',
    name: '宜蘭縣',
    englishName: 'Yilan',
    region: 'north',
    regionName: '北部地區',
    tagline: '蘭陽水田綠意 · 礁溪溫泉與龜山島秘境',
    vibeTags: ['溫泉慢活', '田園咖啡', '賞鯨牛奶海', '親子農場'],
    durationCategory: '2days',
    durationText: '二天一夜慢步調',
    recommendedSeason: '春夏賞鯨出海、秋冬礁溪泡湯',
    description: '穿過雪山隧道即見廣袤蘭陽平原與太平洋守護者龜山島。以礁溪美人湯、三星蔥田手作體驗與極致美味的櫻桃烤鴨聞名遐邇。',
    mapCoords: { x: 420, y: 172 },
    climateTip: '冬季東北季風迎風面多雨，出遊前可預訂溫泉飯店與室內觀光工場。',
    transportTips: '台北轉運站搭乘客運約50分鐘抵礁溪或宜蘭，當地租車或包車自駕最愜意。',
    accentColor: '#059669',
    gradient: 'from-emerald-500 to-teal-700',
    styles: ['nature', 'food', 'island'],
    attractions: [
      {
        id: 'yilan-jiaoxi-hotspring',
        name: '礁溪溫泉公園與湯圍溝',
        category: '休閒體驗',
        description: '全台唯一的平地溫泉，水質清澈無硫磺味，設有免費大眾足湯與溫泉魚吃腳皮體驗。',
        highlight: '戶外日式湯屋、林間足湯放鬆身心',
        addressOrArea: '宜蘭縣礁溪鄉德陽路'
      },
      {
        id: 'yilan-guishan-island',
        name: '龜山島繞島登島 & 牛奶海SUP',
        category: '自然秘境',
        description: '活火山地熱噴發與深藍海水交織出仙境般的Tiffany藍牛奶海，春夏賞鯨豚率極高。',
        highlight: '包船體驗立槳SUP巡航牛奶海、探尋島上海蝕洞',
        addressOrArea: '宜蘭縣頭城鎮烏石港搭船'
      },
      {
        id: 'yilan-taipingshan',
        name: '太平山國家森林遊樂區 & 見晴懷古步道',
        category: '自然秘境',
        description: '被評為全球最美28條小徑之一，雲霧繚繞的舊鐵道林道，充滿古老檜木芬多精。',
        highlight: '乘坐蹦蹦車穿梭高山森林、鳩之澤溫泉煮溫泉蛋',
        addressOrArea: '宜蘭縣大同鄉太平巷'
      }
    ],
    delicacies: [
      { name: '蘭城晶英櫻桃霸王鴨五吃', description: '櫻桃鴨握壽司油脂香脆濃郁，鴨肉絲熬粥鮮醇無比。', tags: ['全台最強烤鴨', '極致美味'] },
      { name: '現煎三星蔥油餅', description: '滿滿翠綠三星蔥包裹在酥脆麵皮裡，蔥汁飽滿甘甜。', tags: ['在地特產', '銅板美食'] },
      { name: '阿宗芋冰城', description: '遵循古法製作的叭噗冰，真材實料吃得到芋頭顆粒。', tags: ['頭城老字號', '童年回憶'] }
    ]
  },
  {
    id: 'taoyuan',
    name: '桃園市',
    englishName: 'Taoyuan',
    region: 'north',
    regionName: '北部地區',
    tagline: '千塘水鄉之都 · 復興拉拉山神木森呼吸',
    vibeTags: ['千塘風貌', '水族生態', '原民高山', '眷村文創'],
    durationCategory: '1day',
    durationText: '一日輕旅行～二天一夜',
    recommendedSeason: '四季皆宜（拉拉山夏季避暑採水蜜桃、秋季賞楓）',
    description: '台灣的國門之都，擁有特殊的千塘之鄉地貌。青埔特區匯集國際級都會水生公園與OUTLET，往南更有大溪老街豆干香與復興區壯闊千年檜木巨木群。',
    mapCoords: { x: 345, y: 145 },
    climateTip: '台地冬季季風強勁偏冷，前往拉拉山高山區域建議攜帶保暖防風外套。',
    transportTips: '高鐵桃園站直通機捷與青埔商圈，前往大溪老街可自中壢或桃園車站轉乘台灣好行。',
    accentColor: '#2563eb',
    gradient: 'from-blue-600 to-indigo-700',
    styles: ['nature', 'culture', 'urban'],
    attractions: [
      {
        id: 'taoyuan-daxi',
        name: '大溪老街與木藝生態博物館',
        category: '歷史文化',
        description: '巴洛克式華麗雕花立面街屋，傳統木藝職人聚落與飄香數十載的大溪黑豆干。',
        highlight: '老街品嚐現滷熱豆干、參觀壹號館日式木造官舍',
        addressOrArea: '桃園市大溪區和平路'
      },
      {
        id: 'taoyuan-xpark',
        name: 'Xpark 都會型水生公園',
        category: '休閒體驗',
        description: '由日本橫濱八景島策劃的當代水族館，以光影沉浸藝術與企鵝咖啡廳引人入勝。',
        highlight: '癒見水母奇幻鏡面光影秀、萬尾銀鯓群游大水槽',
        addressOrArea: '桃園市中壢區春德路'
      }
    ],
    delicacies: [
      { name: '大溪現滷黃日香黑豆干', description: '獨特焦糖色澤以特製滷汁慢熬，豆香濃郁微辣多汁。', tags: ['老街招牌', '名產必買'] },
      { name: '忠貞市場米干與破酥包', description: '雲南滇緬眷村特色，純米研磨濃湯加入豬肝半熟蛋。', tags: ['異國風情', '排隊早餐'] }
    ]
  },
  {
    id: 'hsinchu',
    name: '新竹縣市',
    englishName: 'Hsinchu',
    region: 'north',
    regionName: '北部地區',
    tagline: '風城科技古韻 · 客家老街擂茶與司馬庫斯',
    vibeTags: ['上帝的部落', '客家美食', '城隍廟小吃', '風城工藝'],
    durationCategory: '2days',
    durationText: '一日漫步～二天一夜',
    recommendedSeason: '秋季九降風吹起正是新埔曬柿餅最壯觀季節',
    description: '素有「風城」之稱的歷史古城，同時擁有台灣矽谷與豐厚的客家風情。走進全台最深山部落司馬庫斯探索巨木群，或在新竹都城隍廟嚐遍百年米粉貢丸。',
    mapCoords: { x: 310, y: 172 },
    climateTip: '秋冬「九降風」風力強勁，帽子與圍巾必備；高山部落須留意入山管制與保暖。',
    transportTips: '高鐵新竹站與台鐵六家線互通，前往司馬庫斯或北埔老街建議預約包車或自駕。',
    accentColor: '#0891b2',
    gradient: 'from-cyan-600 to-teal-800',
    styles: ['nature', 'culture', 'food'],
    attractions: [
      {
        id: 'hsinchu-smangus',
        name: '司馬庫斯（上帝的部落）',
        category: '自然秘境',
        description: '遺世獨立的泰雅族高山部落，坐擁2500年樹齡的壯麗巨木群步道與壯麗星空。',
        highlight: '仰望「大老爺神木」、體驗純樸部落共享生活文化',
        addressOrArea: '新竹縣尖石鄉玉峰村'
      },
      {
        id: 'hsinchu-city-god-temple',
        name: '新竹都城隍廟與東門城',
        category: '歷史文化',
        description: '全台位階最高城隍廟，廟埕周圍匯集了傳承百年的肉圓、貢丸與米粉老店。',
        highlight: '迎曦門古蹟廣場散步、探訪廟埕紅糟肉圓',
        addressOrArea: '新竹市北區中山路'
      }
    ],
    delicacies: [
      { name: '彈牙海瑞貢丸湯 & 炊米粉', description: '純豬後腿肉槌打，肉香四溢咬下爆汁，米粉細緻有嚼勁。', tags: ['風城第一', '百年老店'] },
      { name: '北埔擂茶與客家粄條', description: '自己動手研磨茶葉、芝麻與花生，溫潤回甘佐客家油蔥鹹粄條。', tags: ['客家特色', 'DIY樂趣'] }
    ]
  },

  // 中部地區
  {
    id: 'miaoli',
    name: '苗栗縣',
    englishName: 'Miaoli',
    region: 'central',
    regionName: '中部地區',
    tagline: '山城桐花木雕 · 舊山線鐵道鐵馬吹微風',
    vibeTags: ['鐵道漫遊', '客家陶藝', '春日桐花', '大湖草莓'],
    durationCategory: '2days',
    durationText: '二天一夜渡假遊',
    recommendedSeason: '冬季採大湖草莓、春季賞五月雪油桐花',
    description: '浪漫台三線上的慢城勝地，擁有三義木雕藝術村、舊山線鐵道自行車奔馳於龍騰斷橋之上，是遠離都市塵囂、親近自然綠意與陶藝手作的首選。',
    mapCoords: { x: 275, y: 205 },
    climateTip: '山城春季多霧、早晚溫差顯著，建議洋蔥式穿搭。',
    transportTips: '搭乘台鐵至三義車站，租借機車或搭計程車即可暢遊龍騰斷橋與木雕街。',
    accentColor: '#10b981',
    gradient: 'from-emerald-600 to-green-700',
    styles: ['nature', 'culture'],
    attractions: [
      {
        id: 'miaoli-railbike',
        name: '舊山線鐵道自行車 & 龍騰斷橋',
        category: '休閒體驗',
        description: '騎乘電動鐵道車橫越33公尺高的魚藤坪鐵橋，近距離俯瞰百年紅磚殘拱巨構。',
        highlight: '穿梭夢幻七彩燈光隧道、俯瞰斷橋滄桑之美',
        addressOrArea: '苗栗縣三義鄉勝興村'
      },
      {
        id: 'miaoli-dahu-strawberry',
        name: '大湖草莓文化館與採果園',
        category: '休閒體驗',
        description: '全台草莓最大產區，冬季草莓季時滿園香甜，更發展出草莓香腸、草莓貢丸等獨特美食。',
        highlight: '親手摘採鮮紅大草莓、品嚐草莓泡芙與特色冰品',
        addressOrArea: '苗栗縣大湖鄉富興村'
      }
    ],
    delicacies: [
      { name: '三義客家傳統米食與水晶餃', description: '手工地瓜粉揉製外皮晶瑩剔透，內餡黑胡椒豬肉餡鹹香鮮美。', tags: ['三義必吃', '客家風味'] },
      { name: '大湖鮮採草莓大福', description: '薄透麻糬包裹香甜紅豆沙與多汁草莓，酸甜完美平衡。', tags: ['冬季限定', '少女心甜點'] }
    ]
  },
  {
    id: 'taichung',
    name: '台中市',
    englishName: 'Taichung',
    region: 'central',
    regionName: '中部地區',
    tagline: '日光美學之城 · 歌劇院光影與全台最大夜市',
    vibeTags: ['當代建築', '夜市旗艦', '高美濕地', '甜點下午茶'],
    durationCategory: '2days',
    durationText: '二天一夜都會假期',
    recommendedSeason: '四季皆宜（秋季天氣穩定宜人，日落最美）',
    description: '氣候宜人的文化休閒樞紐，擁有伊東豊雄設計的台中國家歌劇院、綠園道文創聚落、高美濕地絕美風車夕陽，以及全台美食實驗場——逢甲夜市。',
    mapCoords: { x: 240, y: 245 },
    climateTip: '台中長年降雨較少陽光充沛，夏季紫外線強烈注意防曬補水。',
    transportTips: '台中捷運綠線已通車，市區公車享市民搭乘優惠，亦推薦租乘機車或開車自駕。',
    accentColor: '#0284c7',
    gradient: 'from-sky-500 to-indigo-600',
    styles: ['urban', 'food', 'nature', 'culture'],
    attractions: [
      {
        id: 'taichung-opera-house',
        name: '台中國家歌劇院 & 審計新村',
        category: '文創藝術',
        description: '世界九大新地標之一的無樑柱「美聲涵洞」建築，散步至審計新村逛青年文創市集。',
        highlight: '頂樓空中花園漫步、美聲涵洞聆聽回音迴響',
        addressOrArea: '台中市西屯區惠來路二段'
      },
      {
        id: 'taichung-gaomei',
        name: '高美野生動物保護區（高美濕地）',
        category: '自然秘境',
        description: '擁有全台最大的雲林莞草區，夕陽西下時海天一色被譽為「台灣的天空之鏡」。',
        highlight: '木棧道盡頭踏水看夕陽、觀察招潮蟹與彈塗魚',
        addressOrArea: '台中市清水區美堤街'
      },
      {
        id: 'taichung-fengjia',
        name: '逢甲國際觀光夜市',
        category: '夜市美食',
        description: '全台灣流行美食的創新發源地，明倫蛋餅、官芝霖大腸包小腸皆發源於此。',
        highlight: '品嚐創意排隊新奇小吃、平價時尚服飾血拼',
        addressOrArea: '台中市西屯區文華路'
      }
    ],
    delicacies: [
      { name: '官芝霖大腸包小腸', description: '炭烤米腸夾入多汁香腸，搭配花生粉、酸菜、小黃瓜與蒜頭。', tags: ['逢甲傳奇', '排隊美食'] },
      { name: '宮原眼科冰淇淋', description: '日治老眼科醫院改造，數十種台灣水果與頂級巧克力冰淇淋，可加鳳梨酥起司蛋糕配料。', tags: ['台中地標', '文創美學'] },
      { name: '傳統太陽餅與檸檬餅', description: '層層酥皮包裹麥芽香甜，搭配午茶絕配伴手禮。', tags: ['百年伴手禮', '台中必買'] }
    ]
  },
  {
    id: 'changhua',
    name: '彰化縣',
    englishName: 'Changhua',
    region: 'central',
    regionName: '中部地區',
    tagline: '八卦大佛古城 · 鹿港九曲巷老屋慢遊',
    vibeTags: ['百年肉圓', '鹿港小鎮', '八卦山景', '扇形車庫'],
    durationCategory: '1day',
    durationText: '一日懷舊輕旅行',
    recommendedSeason: '四季皆宜（秋冬涼爽適合漫遊老街）',
    description: '一府二鹿三艋舺，鹿港小鎮完整保留了紅磚九曲巷、摸乳巷與天后宮媽祖廟香火。更有全台唯一的國寶級活化石——「彰化扇形車庫」火車頭旅館。',
    mapCoords: { x: 215, y: 280 },
    climateTip: '彰化氣候平穩，夏季正午炎熱，漫步老街時留意遮陽。',
    transportTips: '自台中搭台鐵15分鐘即可抵彰化火車站，出站步行可抵扇形車庫與知名肉圓店。',
    accentColor: '#d97706',
    gradient: 'from-amber-600 to-orange-700',
    styles: ['culture', 'food'],
    attractions: [
      {
        id: 'changhua-lukang',
        name: '鹿港老街與天后宮',
        category: '歷史文化',
        description: '穿梭古老閩南紅磚洋樓，尋訪九曲巷的避風防盜智慧與十宜樓書香風雅。',
        highlight: '摸乳巷探秘、天后宮祈福、品嚐麵茶古早味',
        addressOrArea: '彰化縣鹿港鎮瑤林街'
      },
      {
        id: 'changhua-roundhouse',
        name: '彰化扇形車庫（國定古蹟）',
        category: '歷史文化',
        description: '全台唯一保存完好的扇形鐵道調車轉盤，蒸汽火車頭依舊在此整備喘息。',
        highlight: '登觀景台俯瞰十二股道火車車庫、近距離觀看火車調頭轉盤',
        addressOrArea: '彰化縣彰化市彰美路一段'
      }
    ],
    delicacies: [
      { name: '阿璋肉圓 & 北門口炸肉圓', description: '低溫油泡外皮軟Q vs 高溫脆皮爆汁，包入大塊香菇與厚切豬肉。', tags: ['九把刀電影', '肉圓發源地'] },
      { name: '老龍師肉包', description: '老麵發酵外皮帶著微甜彈性，內餡香菇鮮筍肉汁豐沛。', tags: ['排隊名店', '鹿港必買'] },
      { name: '彰化爌肉飯', description: '以牙籤串起厚切三層肉，老滷汁慢火燉至豬皮膠質黏唇化開。', tags: ['宵夜早餐皆有', '彰化靈魂'] }
    ]
  },
  {
    id: 'nantou',
    name: '南投縣',
    englishName: 'Nantou',
    region: 'central',
    regionName: '中部地區',
    tagline: '日月水沙連仙境 · 清境合歡雲端大景',
    vibeTags: ['高山星空', '湖光山色', '頂級茶香', '雲海草原'],
    durationCategory: '2days',
    durationText: '二天一夜～三天兩夜度假',
    recommendedSeason: '四季皆美（秋高氣爽日月潭萬人泳渡、冬季合歡山銀白雪景）',
    description: '台灣唯一不靠海的內陸縣，卻坐擁全台最夢幻的「日月潭」與歐風「清境農場」，更是攀登合歡山公路百岳、探索溪頭杉林溪森林浴的避暑天堂。',
    mapCoords: { x: 285, y: 280 },
    climateTip: '山區午後容易起濃霧降溫，開車請開霧燈減速，隨身準備禦寒厚衣物。',
    transportTips: '自台中高鐵站搭乘台灣好行日月潭線或清境線，交通銜接順暢。',
    accentColor: '#0d9488',
    gradient: 'from-teal-600 to-emerald-800',
    styles: ['nature', 'food', 'culture'],
    attractions: [
      {
        id: 'nantou-sunmoonlake',
        name: '日月潭環湖自行車道 & 向山遊客中心',
        category: '美拍打卡',
        description: '入選CNN全球十大最美自行車道，騎乘水上單車道遠眺慈恩塔與水色瀲灩。',
        highlight: '水社至向山落羽松水上自行車道、向山遊客中心清水模鏡面水池',
        addressOrArea: '南投縣魚池鄉中山路'
      },
      {
        id: 'nantou-chingjing',
        name: '清境農場青青草原 & 合歡山暗空公園',
        category: '自然秘境',
        description: '綿延如茵的翠綠高山草原，可愛綿羊秀與全台首座國際認證暗空星空守護地。',
        highlight: '近距離餵食柯麗黛綿羊、武嶺合歡山看壯闊雲海銀河',
        addressOrArea: '南投縣仁愛鄉仁和路'
      }
    ],
    delicacies: [
      { name: '日月潭阿薩姆紅茶蛋 & 紅玉18號', description: '台茶18號慢火滷製香菇茶葉蛋，香氣撲鼻甘醇回甜。', tags: ['玄光寺必買', '頂級台灣茶'] },
      { name: '埔里胡國雄古早麵', description: '切仔麵淋上紅蔥頭肉燥，搭配豬肝、粉腸與紹興酒蛋。', tags: ['埔里老店', '家常古早味'] },
      { name: '清境原住民竹筒飯與雲南擺夷料理', description: '香糯紫米竹香四溢，搭配錦灑與香酥竹蟲特色風味。', tags: ['異族料理', '山產美味'] }
    ]
  },
  {
    id: 'yunlin',
    name: '雲林縣',
    englishName: 'Yunlin',
    region: 'central',
    regionName: '中部地區',
    tagline: '布袋戲原鄉 · 北港朝天宮香火與古坑咖啡',
    vibeTags: ['宗教朝聖', '布袋戲曲', '高山咖啡', '農業糧倉'],
    durationCategory: '1day',
    durationText: '一日文化輕旅行',
    recommendedSeason: '農曆三月媽祖迎熱鬧、秋冬古坑咖啡節',
    description: '台灣最大的農業糧倉與掌中戲（布袋戲）故鄉。北港朝天宮是全台媽祖信仰重鎮，古坑華山則是台灣高山咖啡發源地，更擁有西螺大橋紅鐵橋宏偉歷史。',
    mapCoords: { x: 195, y: 325 },
    climateTip: '雲林日照充足溫暖，春秋季造訪氣候最適中。',
    transportTips: '高鐵雲林站位於虎尾，鄰近布袋戲館，轉乘公車或計程車可至北港與西螺。',
    accentColor: '#c2410c',
    gradient: 'from-orange-600 to-amber-700',
    styles: ['culture', 'food'],
    attractions: [
      {
        id: 'yunlin-beigang',
        name: '北港朝天宮與宮口老街',
        category: '歷史文化',
        description: '國定古蹟朝天宮，三百年媽祖香火鼎盛，老街兩旁林立麻油、花生酥與狀元餅老鋪。',
        highlight: '參拜天上聖母、品嚐假魚肚羹與生炒鴨肉羹',
        addressOrArea: '雲林縣北港鎮中山路'
      },
      {
        id: 'yunlin-gukeng',
        name: '古坑華山咖啡休閒農業區',
        category: '休閒體驗',
        description: '沿著山路眺望雲林夜景，品味台灣在地種植阿拉比卡咖啡，享受山間慢活。',
        highlight: '景觀咖啡廳看嘉南平原百萬夜景、走訪小天梯步道',
        addressOrArea: '雲林縣古坑鄉華山村'
      }
    ],
    delicacies: [
      { name: '北港生炒鴨肉羹', description: '大火快炒焦香鴨肉與清脆筍絲，湯頭以紅蔥頭及醋香勾芡微甜。', tags: ['北港招牌', '老饕回味'] },
      { name: '西螺純釀黑豆醬油 & 碗粿', description: '陶甕日曝180天古法純釀，搭配蒸得滑嫩米香的古早味油蔥碗粿。', tags: ['西螺名產', '傳統工藝'] }
    ]
  },

  // 南部地區
  {
    id: 'chiayi',
    name: '嘉義縣市',
    englishName: 'Chiayi',
    region: 'south',
    regionName: '南部地區',
    tagline: '阿里山日出雲海 · 木都檜木森活與火雞肉飯',
    vibeTags: ['高山小火車', '火雞肉飯', '檜意森活', '巨木森林'],
    durationCategory: '2days',
    durationText: '二天一夜～三天兩夜慢旅行',
    recommendedSeason: '春季阿里山櫻花季、秋冬觀賞壯麗雲海日出',
    description: '阿里山森林鐵路的起點「木都」，擁有全台最密集的日式木造官舍聚落「檜意森活村」，街頭巷尾飄散著令人魂牽夢縈的火雞肉飯香氣。',
    mapCoords: { x: 215, y: 375 },
    climateTip: '嘉義市區溫暖，但阿里山海拔2200公尺以上，氣溫常比平地低12~15度，必帶厚羽絨衣。',
    transportTips: '搭乘阿里山森林鐵路本線小火車從嘉義火車站直上奮起湖與阿里山園區。',
    accentColor: '#15803d',
    gradient: 'from-green-700 to-emerald-900',
    styles: ['nature', 'food', 'culture'],
    attractions: [
      {
        id: 'chiayi-alishan',
        name: '阿里山國家森林遊樂區 & 祝山日出',
        category: '自然秘境',
        description: '五奇勝景：日出、雲海、鐵道、森林、晚霞。走在千年巨木棧道森呼吸。',
        highlight: '清晨搭祝山線火車迎接金色第一道晨光、姊妹潭幽靜倒影',
        addressOrArea: '嘉義縣阿里山鄉中正村'
      },
      {
        id: 'chiayi-hinoki-village',
        name: '檜意森活村 & 嘉義市立美術館',
        category: '歷史文化',
        description: '全台最大日式官舍建築群，散發天然紅檜香氣，如今改造成文創選物與茶屋聚落。',
        highlight: '體驗日式浴衣穿搭漫步檜木庭園、打卡美術館新舊建築共融綠建築',
        addressOrArea: '嘉義市東區林森東路'
      }
    ],
    delicacies: [
      { name: '嘉義道地火雞肉飯（劉里長/阿樓師/民主）', description: '手撕多汁火雞肉絲或腿肉丁，澆上滾燙香醇雞油蔥酥，香氣爆發。', tags: ['全台無敵', '嘉義之魂'] },
      { name: '林聰明沙鍋魚頭', description: '扁魚蝦米熬製醇厚濃湯，大白菜甜軟，配上炸至金黃的大頭鰱魚頭。', tags: ['Netflix推薦', '超人氣排隊'] },
      { name: '源興御香屋紅鑽葡萄柚綠茶', description: '滿杯現剝新鮮葡萄柚果肉加酸梅，酸甜解膩排隊神飲。', tags: ['嘉義排隊飲料', '果香十足'] }
    ]
  },
  {
    id: 'tainan',
    name: '台南市',
    englishName: 'Tainan',
    region: 'south',
    regionName: '南部地區',
    tagline: '台灣歷史開端 · 美食之都與紅磚老巷漫遊',
    vibeTags: ['小吃天花板', '古蹟巡禮', '老宅咖啡', '全糖城市'],
    durationCategory: '2days',
    durationText: '二天一夜～三天兩夜吃不停',
    recommendedSeason: '秋冬氣候乾燥舒爽最宜人，避開七八月盛夏酷熱',
    description: '四百年歷史的文化古都，全台小吃密度之最。安平古堡、赤嵌樓見證荷治清領光陰，正興街、神農街老宅改裝文創咖啡館，隨便走進一家小攤都是數十年功力。',
    mapCoords: { x: 175, y: 425 },
    climateTip: '陽光充足氣候溫和，隨身準備遮陽帽，建議租乘機車最方便穿梭老巷。',
    transportTips: '高鐵台南站可轉乘台鐵沙崙支線20分鐘直達台南火車站，市區騎YouBike亦極為便利。',
    accentColor: '#e11d48',
    gradient: 'from-rose-500 to-red-700',
    styles: ['food', 'culture', 'urban'],
    attractions: [
      {
        id: 'tainan-shennong-street',
        name: '神農街老街與台南市立美術館二館',
        category: '歷史文化',
        description: '清代五條港古老木造街屋，夜幕垂掛大紅燈籠；轉身走入普立茲克得主設計的純白碎形幾何美術館。',
        highlight: '入夜探訪神農街老宅酒吧與獨立手作店、登南美館頂樓五角階梯',
        addressOrArea: '台南市中西區神農街'
      },
      {
        id: 'tainan-anping',
        name: '安平古堡與安平樹屋',
        category: '歷史文化',
        description: '熱蘭遮城殘蹟與百年大榕樹盤根錯節吞噬倉庫的奇幻共生景觀。',
        highlight: '漫步紅磚古城牆、逛安平老街品嚐蝦捲與豆花',
        addressOrArea: '台南市安平區國勝路'
      },
      {
        id: 'tainan-chimei-museum',
        name: '奇美博物館與都會公園',
        category: '文創藝術',
        description: '希臘神殿式宏偉建築、阿波羅噴泉與奧林帕斯橋，收藏西方古典藝術與世界頂級名琴。',
        highlight: '打卡歐洲宮廷水池倒影、觀賞羅丹沉思者真跡雕塑',
        addressOrArea: '台南市仁德區文華路二段'
      }
    ],
    delicacies: [
      { name: '溫體現沖牛肉湯', description: '當日清晨現宰溫體黃牛肉，滾燙高湯淋下粉嫩半熟，沾薑絲甜油膏。', tags: ['台南早餐傳奇', '鮮甜肉嫩'] },
      { name: '鱔魚意麵（炒焦香/羹）', description: '大火鑊氣快炒，洋蔥脆口鱔魚彈牙，特製烏醋甜酸醬汁包裹炸意麵。', tags: ['鑊氣十足', '經典台南甜'] },
      { name: '富盛號碗粿 & 金得春捲', description: '國華街必吃組合，黑豆醬油炒肉燥米漿，蒸出深色微Q靈魂滋味。', tags: ['永樂市場', '銅板米其林'] }
    ]
  },
  {
    id: 'kaohsiung',
    name: '高雄市',
    englishName: 'Kaohsiung',
    region: 'south',
    regionName: '南部地區',
    tagline: '港灣巨構新生 · 駁二流行音樂與大港夕照',
    vibeTags: ['輕軌港灣', '當代藝文', '海港落日', '旗津渡輪'],
    durationCategory: '2days',
    durationText: '二天一夜都會假期',
    recommendedSeason: '秋冬南台灣陽光溫暖不悶熱，最適合戶外單車騎行',
    description: '重工業海洋港都華麗轉型！輕軌串起駁二藝術特區、高雄流行音樂中心、大港橋與旗津海水浴場，城市開闊大氣，擁有濃厚的熱情海島活力。',
    mapCoords: { x: 165, y: 485 },
    climateTip: '冬季氣溫宜人宛如初夏，短袖搭配薄外套即可應付多數天氣。',
    transportTips: '高雄捷運與輕軌路網成熟，持悠遊卡或一卡通隨搭隨走，更可搭乘鼓山渡輪前往旗津。',
    accentColor: '#0891b2',
    gradient: 'from-cyan-600 to-blue-700',
    styles: ['urban', 'culture', 'food', 'nature'],
    attractions: [
      {
        id: 'kaohsiung-pier2-kpmc',
        name: '駁二藝術特區 & 高雄流行音樂中心',
        category: '文創藝術',
        description: '舊港灣倉庫改建為當代藝術展演場域，大港橋每天定期開合旋轉，高流宛如珊瑚海浪。',
        highlight: '下午三點看大港橋水平旋轉閉合、搭輕軌看愛河灣落日',
        addressOrArea: '高雄市鹽埕區大勇路'
      },
      {
        id: 'kaohsiung-qijin',
        name: '旗津老街、彩虹教堂與星空隧道',
        category: '美拍打卡',
        description: '搭乘鼓山渡輪5分鐘抵達海島小鎮，租借電動單車沿著海風大道騎行。',
        highlight: '登旗後燈塔觀賞高雄港全景、享用百元現撈海鮮熱炒',
        addressOrArea: '高雄市旗津區廟前路'
      }
    ],
    delicacies: [
      { name: '旗津現撈海鮮與烤小卷', description: '漁港直送新鮮小卷抹上沙茶醬大火炭烤，彈牙多汁甘甜。', tags: ['海港風味', '夜市必吃'] },
      { name: '鹽埕鴨肉珍 & 鴨肉飯', description: '六十年傳承煙燻鴨肉，淋上獨家香濃肉燥飯，鴨肉香嫩多汁。', tags: ['米其林推薦', '老鹽埕靈魂'] },
      { name: '高雄大碗冰（海之冰）', description: '可點2倍到20倍超大臉盆冰，堆滿芒果香蕉新鮮水果與煉乳。', tags: ['渡船頭回憶', '消暑霸王'] }
    ]
  },
  {
    id: 'pingtung',
    name: '屏東縣',
    englishName: 'Pingtung',
    region: 'south',
    regionName: '南部地區',
    tagline: '國境之南艷陽 · 墾丁白沙灣與小琉球綠蠵龜',
    vibeTags: ['海島渡假', '海龜共游', '落日沙灘', '熱帶雨林'],
    durationCategory: '3plus',
    durationText: '三天兩夜海島放鬆',
    recommendedSeason: '四季皆夏（夏季戲水衝浪、秋冬避寒慢活最舒適）',
    description: '台灣最南端的熱帶度假勝地。墾丁國家公園的珊瑚礁海岸、鵝鑾鼻燈塔大草原，以及近海離島「小琉球」，更以近距離與野生綠蠵龜海中浮潛共游震撼人心。',
    mapCoords: { x: 195, y: 550 },
    climateTip: '秋冬「落山風」偶爾強烈，防風外套必備；夏季陽光極強烈，務必使用海洋友善防曬乳。',
    transportTips: '自左營高鐵站搭乘墾丁快線巴士直達墾丁大街；至東港碼頭搭船20分鐘直達小琉球。',
    accentColor: '#0284c7',
    gradient: 'from-sky-500 to-teal-700',
    styles: ['island', 'nature', 'food'],
    attractions: [
      {
        id: 'pingtung-kenting',
        name: '墾丁白沙灣與龍磐大草原',
        category: '自然秘境',
        description: '貝殼沙細膩潔白的海灣，電影《少年Pi》拍攝地；龍磐公園石灰岩崩崖俯瞰太平洋波瀾壯闊。',
        highlight: '躺在龍磐草原看無光害滿天星斗、白沙灣看落日晚霞',
        addressOrArea: '屏東縣恆春鎮白砂路'
      },
      {
        id: 'pingtung-xiaoliuqiu',
        name: '小琉球珊瑚礁島嶼與花瓶岩',
        category: '自然秘境',
        description: '全台灣唯一的珊瑚礁島，海水清澈透底，是全世界綠蠵龜出沒密度最高的浮潛天堂。',
        highlight: '花瓶岩浮潛或自潛與海龜同游、傍晚落日亭看夕陽西下',
        addressOrArea: '屏東縣琉球鄉'
      }
    ],
    delicacies: [
      { name: '萬巒林家豬腳', description: '特製中藥配方慢火滷透，豬皮Q軟彈牙毫無油膩感，蒜蓉沾醬堪稱一絕。', tags: ['屏東驕傲', '全台馳名'] },
      { name: '東港黑鮪魚生魚片與雙糕潤', description: '油花宛如和牛的頂級黑鮪魚金三角，入口化開甜美回甘。', tags: ['東港三寶', '產地直嘗'] }
    ]
  },

  // 東部地區
  {
    id: 'hualien',
    name: '花蓮縣',
    englishName: 'Hualien',
    region: 'east',
    regionName: '東部地區',
    tagline: '太魯閣鬼斧神工 · 七星潭月牙灣與清水斷崖',
    vibeTags: ['大山大海', '縱谷慢活', '太平洋浪', '原民文化'],
    durationCategory: '3plus',
    durationText: '三天兩夜森呼吸',
    recommendedSeason: '春夏秋皆宜（夏季賞鯨獨木舟，秋高氣爽騎車訪縱谷）',
    description: '背倚中央山脈、面迎浩瀚太平洋。巍峨高聳的大理石峽谷太魯閣、七星潭圓滑礫石灘，以及縱谷中隨風起伏的金黃稻浪，是大自然最慷慨的療癒巨作。',
    mapCoords: { x: 380, y: 285 },
    climateTip: '台鐵花東線班次搶手，逢連續假期請提早14天訂票；山區遇大雨留意落石安全。',
    transportTips: '搭乘台鐵EMU3000新自強號從台北出發約2小時可達，當地租車或租機車自駕最自由。',
    accentColor: '#0d9488',
    gradient: 'from-teal-600 to-cyan-700',
    styles: ['nature', 'food', 'culture'],
    attractions: [
      {
        id: 'hualien-qixingtan',
        name: '七星潭海岸風景區',
        category: '自然秘境',
        description: '優美弧形的月牙灣海灘，海灘遍布被浪花沖刷得光滑如玉的鵝卵石與蔚藍碎浪。',
        highlight: '在海邊疊石頭許願、坐在礫石灘傾聽太平洋海浪翻滾聲',
        addressOrArea: '花蓮縣新城鄉海岸路'
      },
      {
        id: 'hualien-taroko-qingshui',
        name: '清水斷崖與崇德海灣SUP',
        category: '自然秘境',
        description: '垂直拔起800公尺以上的大斷崖直插太平洋深藍海水，清晨划SUP迎接海上日出。',
        highlight: '海上仰望鬼斧神工高聳斷崖、蘇花公路觀景台拍公路絕景',
        addressOrArea: '花蓮縣秀林鄉蘇花公路'
      },
      {
        id: 'hualien-dongdamen',
        name: '東大門夜市',
        category: '夜市美食',
        description: '整合福町夜市、原住民一條街等多個區塊的超大型夜市，充滿竹筒飯與烤山豬肉香氣。',
        highlight: '品嚐原民風味小米酒、第一家烤肉串與強蛋餅',
        addressOrArea: '花蓮縣花蓮市中山路'
      }
    ],
    delicacies: [
      { name: '炸彈蔥油餅（黃車/藍車）', description: '高溫熱油爆炸麵皮外酥內空，夾入半熟爆漿流心蛋，撒上蒜蓉甜辣醬。', tags: ['花蓮神級排隊', '下午茶必搶'] },
      { name: '液香扁食 / 戴記扁食', description: '薄透如絲的餛飩皮包裹純黑豬肉餡，佐芹菜油蔥大骨清湯。', tags: ['蔣經國總統最愛', '百年純粹'] },
      { name: '花蓮薯與奶油酥條', description: '在地甜心地瓜遵循古法烘焙，酥脆奶香濃郁的必買伴手禮。', tags: ['花蓮名產', '下午茶首選'] }
    ]
  },
  {
    id: 'taitung',
    name: '台東縣',
    englishName: 'Taitung',
    region: 'east',
    regionName: '東部地區',
    tagline: '日出第一道光 · 池上伯朗稻浪與三仙台拱橋',
    vibeTags: ['慢活公路', '伯朗大道', '熱氣球嘉年華', '金黃稻浪'],
    durationCategory: '3plus',
    durationText: '三天兩夜慢節奏',
    recommendedSeason: '夏季（鹿野高台國際熱氣球節）、秋冬（池上金黃稻浪收割季）',
    description: '全台灣空氣最純淨、節奏最舒緩的人間仙境。鹿野高台彩色熱氣球升空、池上金城武樹下騎單車奔馳於無電線桿的金黃稻海，沿著台11線海岸公路與太平洋對話。',
    mapCoords: { x: 300, y: 440 },
    climateTip: '紫外線強烈，遮陽帽與太陽眼鏡必備；公車班次間距較長，極建議自駕租車。',
    transportTips: '搭乘台鐵至台東站，自駕沿台9線（縱谷線）或台11線（海線）皆是一生必走公路。',
    accentColor: '#16a34a',
    gradient: 'from-green-600 to-teal-800',
    styles: ['nature', 'food', 'island'],
    attractions: [
      {
        id: 'taitung-chishang',
        name: '池上伯朗大道與天堂路',
        category: '美拍打卡',
        description: '一望無際遼闊無垠的稻田，筆直大道延伸至遠方中央山脈，沒有一支電線桿遮擋。',
        highlight: '租電動自行車微風徐徐穿梭稻浪、金城武樹下品茶打卡',
        addressOrArea: '台東縣池上鄉錦新三號道路'
      },
      {
        id: 'taitung-luye-hot-air-balloon',
        name: '鹿野高台觀光茶園 & 熱氣球節',
        category: '休閒體驗',
        description: '縱谷高處視野開闊，每年夏季數十顆國際造型熱氣球與光雕音樂會點亮夜空。',
        highlight: '體驗熱氣球繫留升空俯瞰卑南溪、品味在地紅烏龍茶',
        addressOrArea: '台東縣鹿野鄉高台路'
      },
      {
        id: 'taitung-sanxiantai',
        name: '三仙台風景區',
        category: '自然秘境',
        description: '八拱紅色跨海人行步橋宛如長龍臥波，連接海中由火山岩構成的神秘仙島。',
        highlight: '迎接台灣本島元旦第一道曙光、探索島上海蝕柱與壺穴',
        addressOrArea: '台東縣成功鎮基翬路'
      }
    ],
    delicacies: [
      { name: '池上全美行月台鐵路便當', description: '冠軍池上米顆粒飽滿Q彈，鋪滿燒肉、卜肉、滷蛋與經典柴魚酥。', tags: ['月台傳奇', '便當之王'] },
      { name: '東河包子', description: '海岸公路超人氣點心，老麵皮香Q有勁，鮮肉餡加入蔥花胡椒肉汁豐沛。', tags: ['台11線必停', '銅板排隊'] },
      { name: '卑南豬血湯與米苔目', description: '大塊滑嫩如布丁的新鮮豬血，撒上大量韭菜酸菜，搭配柴魚片乾拌米苔目。', tags: ['在地台東味', '米其林入選'] }
    ]
  },

  // 離島地區
  {
    id: 'penghu',
    name: '澎湖縣',
    englishName: 'Penghu',
    region: 'islands',
    regionName: '外島離島',
    tagline: '玄武岩壯麗石柱 · 花火節燦爛與雙心石滬',
    vibeTags: ['海上花火', '柱狀玄武岩', '仙人掌冰', '跳島浮潛'],
    durationCategory: '3plus',
    durationText: '三天兩夜～四天三夜跳島',
    recommendedSeason: '春夏季4月～9月（澎湖國際海上花火節、風浪平穩）',
    description: '由九十座島嶼組成的海上明珠。擁有被登錄為世界遺產潛力點的大菓葉柱狀玄武岩、七美雙心石滬的浪漫傳奇、山水沙灘的金色沙灣，以及夏季絢爛的海上花火節。',
    mapCoords: { x: 70, y: 330 },
    climateTip: '10月至隔年3月東北季風極強勁風沙大，強烈建議4~9月前往旅遊。',
    transportTips: '台北松山、台中、台南、高雄皆有國內線班機直飛馬公，夏季亦可自嘉義布袋搭客輪。',
    accentColor: '#0284c7',
    gradient: 'from-sky-500 to-blue-700',
    styles: ['island', 'nature', 'food'],
    attractions: [
      {
        id: 'penghu-qimei-twin-hearts',
        name: '七美雙心石滬與小台灣',
        category: '美拍打卡',
        description: '先民利用潮汐堆砌補魚的石滬，在蔚藍清澈浪花中巧妙勾勒出兩顆相連愛心。',
        highlight: '退潮時俯瞰深淺不一的果凍海雙心石滬、拍小台灣海蝕平台',
        addressOrArea: '澎湖縣七美鄉'
      },
      {
        id: 'penghu-basalt',
        name: '池東大菓葉柱狀玄武岩',
        category: '自然秘境',
        description: '火山熔岩海底冷卻收縮形成的壯麗垂直柱狀節理，雨後前方窪地倒影宛如天然美術館。',
        highlight: '撫摸數百萬年古老玄武岩壁、拍出磅礴地質大片',
        addressOrArea: '澎湖縣西嶼鄉池東村'
      }
    ],
    delicacies: [
      { name: '通樑古榕易家仙人掌冰', description: '艷麗紫紅色的純天然仙人掌果肉汁，酸甜冰沙透心涼解膩。', tags: ['澎湖代表', '天然酸甜'] },
      { name: '二崁杏仁茶與土豆粿', description: '古色古香咾咕石聚落中飄散香純研磨杏仁香氣，配油條剛出爐最對味。', tags: ['二崁古厝', '古法手作'] },
      { name: '小管麵線與炸花枝丸', description: '澎湖清脆小管搭配滑順手工麵線，花枝丸咬下滿滿真實花枝塊。', tags: ['產地現撈', '海鮮必吃'] }
    ]
  },
  {
    id: 'kinmen',
    name: '金門縣',
    englishName: 'Kinmen',
    region: 'islands',
    regionName: '外島離島',
    tagline: '閩南燕尾洋樓 · 戰地坑道與高粱風獅爺',
    vibeTags: ['戰地歷史', '古厝燕尾', '高粱醇香', '牛肉饗宴'],
    durationCategory: '3plus',
    durationText: '三天兩夜歷史文化',
    recommendedSeason: '秋季9月～11月天高氣爽、避開春季濃霧期',
    description: '矗立於前線的歷史要塞，揉合了壯麗的閩南紅磚燕尾古厝、南洋歸國僑領打造的巴洛克洋樓，以及翟山坑道等震撼人心的地下花崗岩軍事奇蹟。',
    mapCoords: { x: 50, y: 170 },
    climateTip: '春季3~5月為霧季易導致航班停飛或延誤，建議購買旅遊不便險並預留行程彈性。',
    transportTips: '台灣主要機場每日皆有密集班機直飛金門尚義機場，島上推薦租汽車或機車穿梭。',
    accentColor: '#b45309',
    gradient: 'from-amber-700 to-yellow-800',
    styles: ['culture', 'food', 'nature'],
    attractions: [
      {
        id: 'kinmen-zhaishan',
        name: '翟山坑道（地下軍事奇觀）',
        category: '歷史文化',
        description: '耗費五年純人工在堅硬花崗岩中炸鑿出的「A」字型水道坑道，水面倒影如夢似幻。',
        highlight: '走入恆溫涼爽的神秘軍事坑道、秋季欣賞坑道音樂節迴響',
        addressOrArea: '金門縣金城鎮古崗村'
      },
      {
        id: 'kinmen-shuitou',
        name: '水頭聚落與得月樓洋樓',
        category: '歷史文化',
        description: '金門最富麗堂皇的傳統僑鄉聚落，得月樓防禦槍樓與紫雲衍派燕尾古厝交相輝映。',
        highlight: '欣賞細緻番仔樓磚雕剪黏、入住百年閩南古厝民宿',
        addressOrArea: '金門縣金城鎮前水頭'
      }
    ],
    delicacies: [
      { name: '金門高粱全牛宴與牛肉乾', description: '以釀酒高粱酒糟飼養的黃牛，肉質甘甜油花香郁，老店特製酒香牛肉乾。', tags: ['金門第一特產', '香醇軟嫩'] },
      { name: '永春廣東粥（無米粥）配油條', description: '大骨高湯將白米熬化無形，打入嫩蛋花、肉丸與厚實豬肝，沾老油條極品。', tags: ['金城排隊早餐', '暖心暖胃'] }
    ]
  },
  {
    id: 'matsu',
    name: '連江縣（馬祖）',
    englishName: 'Matsu',
    region: 'islands',
    regionName: '外島離島',
    tagline: '國境最北藍眼淚 · 芹壁地中海石屋與老酒香',
    vibeTags: ['藍眼淚奇蹟', '芹壁石屋', '老酒麵線', '東引燈塔'],
    durationCategory: '3plus',
    durationText: '三天兩夜～四天三夜跳島',
    recommendedSeason: '4月至6月是追尋夢幻「藍眼淚」與踩星沙的最佳季節',
    description: '散落在閩江口的奇岩列島，被譽為「台版地中海」的北竿芹壁花崗岩石屋、孤懸懸崖的東引白色燈塔，以及春夏夜裡在黑夜波浪間閃爍幽藍熒光的夜光藻「藍眼淚」。',
    mapCoords: { x: 90, y: 55 },
    climateTip: '地勢陡峭山路斜度大，騎乘機車須具備良好操控技術並減速慢行。',
    transportTips: '可從松山或台中搭機至南竿/北竿，亦可從基隆港搭乘「新台馬輪」夜航臥鋪出發。',
    accentColor: '#0369a1',
    gradient: 'from-blue-600 to-indigo-800',
    styles: ['island', 'nature', 'culture', 'food'],
    attractions: [
      {
        id: 'matsu-qinbi',
        name: '北竿芹壁聚落（石頭城）',
        category: '歷史文化',
        description: '依山傍海層疊分布的閩東花崗岩人字砌石屋，屋頂壓瓦石避風，濃郁地中海異國情調。',
        highlight: '在海邊露天咖啡座看龜島品咖啡、細讀反共精神標語',
        addressOrArea: '連江縣北竿鄉芹壁村'
      },
      {
        id: 'matsu-blue-tears',
        name: '北海坑道搖櫓賞藍眼淚',
        category: '自然秘境',
        description: '幽暗深邃的巨大水上花崗岩坑道，深夜搭乘傳統搖櫓木船輕撥水面，觸發點點藍光。',
        highlight: '體驗伸手撥水激起水下銀河般的藍眼淚璀璨熒光',
        addressOrArea: '連江縣南竿鄉仁愛村'
      }
    ],
    delicacies: [
      { name: '馬祖老酒麵線與紅糟炒飯', description: '自釀陳年老酒溫補香醇，煎蛋吸飽老酒湯汁，伴隨細滑麵線令人沉醉。', tags: ['馬祖靈魂', '溫熱甘醇'] },
      { name: '繼光餅（馬祖漢堡）', description: '炭烤老麵餅外圈沾滿芝麻，剖開夾入蔥花炒蛋與多汁厚切五花肉。', tags: ['傳統乾糧', '香氣撲鼻'] }
    ]
  }
];

export const TAIWAN_DESTINATIONS: Destination[] = RAW_DESTINATIONS.filter(
  (item, index, self) => index === self.findIndex((t) => t.id === item.id)
);

export const REGIONS_META = [
  { id: 'all', name: '全台探索', desc: '探索台灣本島與外島全境' },
  { id: 'north', name: '北部地區', desc: '基隆、台北、新北、桃園、新竹、宜蘭' },
  { id: 'central', name: '中部地區', desc: '苗栗、台中、彰化、南投、雲林' },
  { id: 'south', name: '南部地區', desc: '嘉義、台南、高雄、屏東' },
  { id: 'east', name: '東部地區', desc: '花蓮、台東壯麗山海' },
  { id: 'islands', name: '外島離島', desc: '澎湖、金門、馬祖海島秘境' },
] as const;

export const TRAVEL_STYLES = [
  { id: 'all', label: '不拘風格' },
  { id: 'food', label: '美食巡禮' },
  { id: 'nature', label: '壯麗自然' },
  { id: 'urban', label: '城市漫步' },
  { id: 'culture', label: '歷史人文' },
  { id: 'island', label: '海島慢活' },
] as const;

export const TRIP_DURATIONS = [
  { id: 'all', label: '不拘天數' },
  { id: '1day', label: '當天來回' },
  { id: '2days', label: '兩天一夜' },
  { id: '3plus', label: '三天以上' },
] as const;
