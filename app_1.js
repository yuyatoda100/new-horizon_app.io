// NEW HORIZON 3巻末単語リストに基づくUnit別英単語データ
const Words = [

  // ================= Unit 0 =================
  { "id": 1, "unit": "Unit 0", "word": "discover", "meaning": "発見する、見出す", "partOfSpeech": "動詞" },
  { "id": 2, "unit": "Unit 0", "word": "side", "meaning": "側面、脇", "partOfSpeech": "名詞" },
  { "id": 3, "unit": "Unit 0", "word": "finally", "meaning": "ついに、やっと", "partOfSpeech": "熟語" },
  { "id": 4, "unit": "Unit 0", "word": "musical", "meaning": "音楽の、音楽に関する", "partOfSpeech": "動詞" },
  { "id": 5, "unit": "Unit 0", "word": "actor", "meaning": "俳優、役者", "partOfSpeech": "熟語" },

  // ================= Unit 1 =================
  { "id": 6, "unit": "Unit 1", "word": "fashion", "meaning": "ファッション", "partOfSpeech": "熟語" },
  { "id": 7, "unit": "Unit 1", "word": "regional", "meaning": "地方の", "partOfSpeech": "熟語" },
  { "id": 8, "unit": "Unit 1", "word": "martial arts", "meaning": "武道、武術", "partOfSpeech": "熟語" },
  { "id": 9, "unit": "Unit 1", "word": "have never been to", "meaning": "に行ったことがない", "partOfSpeech": "熟語" },
  { "id": 10, "unit": "Unit 1", "word": "foreigner", "meaning": "外国人", "partOfSpeech": "名詞" },
  { "id": 11, "unit": "Unit 1", "word": "ever", "meaning": "今まで、かつて", "partOfSpeech": "副詞" },
  { "id": 12, "unit": "Unit 1", "word": "I've", "meaning": "I haveの略", "partOfSpeech": "代名詞 / 縮約形" },
  { "id": 13, "unit": "Unit 1", "word": "haven't", "meaning": "have notの略", "partOfSpeech": "代名詞 / 縮約形" },
  { "id": 14, "unit": "Unit 1", "word": "hasn't", "meaning": "has notの略", "partOfSpeech": "代名詞 / 縮約形" },
  { "id": 15, "unit": "Unit 1", "word": "global", "meaning": "地球の", "partOfSpeech": "形容詞" },
  { "id": 16, "unit": "Unit 1", "word": "genre", "meaning": "ジャンル", "partOfSpeech": "名詞" },
  { "id": 17, "unit": "Unit 1", "word": "adventure", "meaning": "冒険", "partOfSpeech": "名詞" },
  { "id": 18, "unit": "Unit 1", "word": "adult", "meaning": "大人", "partOfSpeech": "名詞" },
  { "id": 19, "unit": "Unit 1", "word": "quality", "meaning": "質、特性", "partOfSpeech": "名詞" },
  { "id": 20, "unit": "Unit 1", "word": "animation", "meaning": "アニメーション", "partOfSpeech": "熟語" },
  { "id": 21, "unit": "Unit 1", "word": "drawing", "meaning": "お絵かき", "partOfSpeech": "熟語" },
  { "id": 22, "unit": "Unit 1", "word": "delicate", "meaning": "繊細な、きめ細かい", "partOfSpeech": "形容詞" },
  { "id": 23, "unit": "Unit 1", "word": "addition", "meaning": "追加", "partOfSpeech": "熟語" },
  { "id": 24, "unit": "Unit 1", "word": "match", "meaning": "試合、競技", "partOfSpeech": "名詞" },
  { "id": 25, "unit": "Unit 1", "word": "positive", "meaning": "前向きな、積極的な", "partOfSpeech": "形容詞" },
  { "id": 26, "unit": "Unit 1", "word": "existence", "meaning": "存在", "partOfSpeech": "名詞" },
  { "id": 27, "unit": "Unit 1", "word": "root", "meaning": "根、根元", "partOfSpeech": "名詞" },
  { "id": 28, "unit": "Unit 1", "word": "ignore", "meaning": "を無視する", "partOfSpeech": "動詞" },
  { "id": 29, "unit": "Unit 1", "word": "express", "meaning": "表現する、言い表す", "partOfSpeech": "動詞" },
  { "id": 30, "unit": "Unit 1", "word": "movement", "meaning": "運動、運動すること", "partOfSpeech": "名詞" },
  { "id": 31, "unit": "Unit 1", "word": "scroll", "meaning": "巻物", "partOfSpeech": "名詞" },
  { "id": 32, "unit": "Unit 1", "word": "technique", "meaning": "技術", "partOfSpeech": "名詞" },
  { "id": 33, "unit": "Unit 1", "word": "influence", "meaning": "に影響を及ぼす、影響を与える", "partOfSpeech": "熟語" },
  { "id": 34, "unit": "Unit 1", "word": "advantage", "meaning": "有利、利点", "partOfSpeech": "名詞" },
  { "id": 35, "unit": "Unit 1", "word": "taste", "meaning": "味、な味がする", "partOfSpeech": "動詞" },
  { "id": 36, "unit": "Unit 1", "word": "link", "meaning": "接続、繋がり", "partOfSpeech": "熟語" },
  { "id": 37, "unit": "Unit 1", "word": "entirely", "meaning": "完全に、全く", "partOfSpeech": "副詞" },
  { "id": 38, "unit": "Unit 1", "word": "It is said that", "meaning": "と言われている", "partOfSpeech": "熟語" },
  { "id": 39, "unit": "Unit 1", "word": "take advantage of", "meaning": "を利用する", "partOfSpeech": "熟語" },

  // ================= Unit 2 =================
  { "id": 40, "unit": "Unit 2", "word": "already", "meaning": "すでに、既に", "partOfSpeech": "副詞" },
  { "id": 41, "unit": "Unit 2", "word": "essay", "meaning": "論文、小説", "partOfSpeech": "名詞" },
  { "id": 42, "unit": "Unit 2", "word": "yet", "meaning": "まだ、尚", "partOfSpeech": "副詞" },
  { "id": 43, "unit": "Unit 2", "word": "ethical", "meaning": "倫理的な", "partOfSpeech": "形容詞" },
  { "id": 44, "unit": "Unit 2", "word": "designer", "meaning": "設計者、デザイナー", "partOfSpeech": "名詞" },
  { "id": 45, "unit": "Unit 2", "word": "interview", "meaning": "面接", "partOfSpeech": "熟語" },
  { "id": 46, "unit": "Unit 2", "word": "message", "meaning": "メッセージ", "partOfSpeech": "名詞" },
  { "id": 47, "unit": "Unit 2", "word": "sleep", "meaning": "眠る", "partOfSpeech": "動詞" },
  { "id": 48, "unit": "Unit 2", "word": "yet", "meaning": "まだ、尚", "partOfSpeech": "副詞" },
  { "id": 49, "unit": "Unit 2", "word": "accessory", "meaning": "アクセサリー", "partOfSpeech": "名詞" },
  { "id": 50, "unit": "Unit 2", "word": "recycle", "meaning": "リサイクル", "partOfSpeech": "名詞" },
  { "id": 51, "unit": "Unit 2", "word": "eco-friendly", "meaning": "環境にやさしい", "partOfSpeech": "形容詞" },
  { "id": 52, "unit": "Unit 2", "word": "become", "meaning": "になる、となる", "partOfSpeech": "動詞" },
  { "id": 53, "unit": "Unit 2", "word": "impact", "meaning": "影響、衝撃", "partOfSpeech": "名詞" },
  { "id": 54, "unit": "Unit 2", "word": "since", "meaning": "〜以来、〜から", "partOfSpeech": "熟語" },
  { "id": 55, "unit": "Unit 2", "word": "morally", "meaning": "倫理的に", "partOfSpeech": "名詞" },
  { "id": 56, "unit": "Unit 2", "word": "clothing", "meaning": "衣料品、服", "partOfSpeech": "熟語" },
  { "id": 57, "unit": "Unit 2", "word": "company", "meaning": "会社、企業", "partOfSpeech": "名詞" },
  { "id": 58, "unit": "Unit 2", "word": "chemical", "meaning": "化学物質、化学薬品", "partOfSpeech": "名詞" },
  { "id": 59, "unit": "Unit 2", "word": "lead", "meaning": "を導く、導き出す", "partOfSpeech": "動詞" },
  { "id": 60, "unit": "Unit 2", "word": "less", "meaning": "もっと少なく、より少なく", "partOfSpeech": "動詞" },
  { "id": 61, "unit": "Unit 2", "word": "negative", "meaning": "否定的な、良くない", "partOfSpeech": "形容詞" },
  { "id": 62, "unit": "Unit 2", "word": "include", "meaning": "を含む、含める", "partOfSpeech": "熟語" },
  { "id": 63, "unit": "Unit 2", "word": "vegan", "meaning": "ベジタリアン", "partOfSpeech": "名詞" },
  { "id": 64, "unit": "Unit 2", "word": "leather", "meaning": "革", "partOfSpeech": "名詞" },
  { "id": 65, "unit": "Unit 2", "word": "avoid", "meaning": "を避ける、回避する", "partOfSpeech": "動詞" },
  { "id": 66, "unit": "Unit 2", "word": "wool", "meaning": "羊毛", "partOfSpeech": "名詞" },
  { "id": 67, "unit": "Unit 2", "word": "fur", "meaning": "毛皮", "partOfSpeech": "名詞" },
  { "id": 68, "unit": "Unit 2", "word": "you've", "meaning": "You haveの略", "partOfSpeech": "代名詞 / 縮約形" },
  { "id": 69, "unit": "Unit 2", "word": "moreover", "meaning": "さらに、そのうえ", "partOfSpeech": "名詞" },
  { "id": 70, "unit": "Unit 2", "word": "worker", "meaning": "労働者", "partOfSpeech": "名詞" },
  { "id": 71, "unit": "Unit 2", "word": "developing", "meaning": "開発している", "partOfSpeech": "熟語" },
  { "id": 72, "unit": "Unit 2", "word": "condition", "meaning": "状況、状態", "partOfSpeech": "熟語" },
  { "id": 73, "unit": "Unit 2", "word": "wage", "meaning": "賃金", "partOfSpeech": "名詞" },
  { "id": 74, "unit": "Unit 2", "word": "working", "meaning": "働いている", "partOfSpeech": "熟語" },
  { "id": 75, "unit": "Unit 2", "word": "fair", "meaning": "公平な", "partOfSpeech": "形容詞" },
  { "id": 76, "unit": "Unit 2", "word": "prohibit", "meaning": "禁じる", "partOfSpeech": "動詞" },
  { "id": 77, "unit": "Unit 2", "word": "labor", "meaning": "労働、労働者", "partOfSpeech": "名詞" },
  { "id": 78, "unit": "Unit 2", "word": "responsible", "meaning": "責任がある、責任が伴う", "partOfSpeech": "熟語" },
  { "id": 79, "unit": "Unit 2", "word": "danger", "meaning": "危険", "partOfSpeech": "名詞" },
  { "id": 80, "unit": "Unit 2", "word": "extinction", "meaning": "絶滅、消滅", "partOfSpeech": "熟語" },
  { "id": 81, "unit": "Unit 2", "word": "challenge", "meaning": "挑戦する、挑戦", "partOfSpeech": "名詞" },

  // ================= Unit 3 =================
  { "id": 82, "unit": "Unit 3", "word": "human", "meaning": "人間、人", "partOfSpeech": "名詞" },
  { "id": 83, "unit": "Unit 3", "word": "endangered", "meaning": "絶滅の危機にさらされている", "partOfSpeech": "動詞" },
  { "id": 84, "unit": "Unit 3", "word": "be in danger of", "meaning": "の危険にさらされている", "partOfSpeech": "熟語" },
  { "id": 85, "unit": "Unit 3", "word": "climate", "meaning": "気候、天候", "partOfSpeech": "名詞" },
  { "id": 86, "unit": "Unit 3", "word": "survive", "meaning": "生き残る、生存する", "partOfSpeech": "動詞" },
  { "id": 87, "unit": "Unit 3", "word": "cheetah", "meaning": "チーター", "partOfSpeech": "名詞" },
  { "id": 88, "unit": "Unit 3", "word": "sea otter", "meaning": "ラッコ", "partOfSpeech": "熟語" },
  { "id": 89, "unit": "Unit 3", "word": "article", "meaning": "記事、報道記事", "partOfSpeech": "名詞" },
  { "id": 90, "unit": "Unit 3", "word": "hear of", "meaning": "について聞く、尋ねる", "partOfSpeech": "熟語" },
  { "id": 91, "unit": "Unit 3", "word": "population", "meaning": "人口、国民", "partOfSpeech": "熟語" },
  { "id": 92, "unit": "Unit 3", "word": "rapidly", "meaning": "速く、急速に、急いで", "partOfSpeech": "副詞" },
  { "id": 93, "unit": "Unit 3", "word": "beginning", "meaning": "最初、初め", "partOfSpeech": "熟語" },
  { "id": 94, "unit": "Unit 3", "word": "century", "meaning": "世紀、百年", "partOfSpeech": "名詞" },
  { "id": 95, "unit": "Unit 3", "word": "shock", "meaning": "ショック", "partOfSpeech": "名詞" },
  { "id": 96, "unit": "Unit 3", "word": "safely", "meaning": "安全に、安泰に", "partOfSpeech": "副詞" },
  { "id": 97, "unit": "Unit 3", "word": "oil", "meaning": "油、石油", "partOfSpeech": "名詞" },
  { "id": 98, "unit": "Unit 3", "word": "spill", "meaning": "をこぼす", "partOfSpeech": "動詞" },
  { "id": 99, "unit": "Unit 3", "word": "hunting", "meaning": "狩り、狩猟", "partOfSpeech": "熟語" },
  { "id": 100, "unit": "Unit 3", "word": "killer whale", "meaning": "シャチ", "partOfSpeech": "熟語" },
  { "id": 101, "unit": "Unit 3", "word": "the Northern Pacific Ocean", "meaning": "北太平洋", "partOfSpeech": "熟語" },
  { "id": 102, "unit": "Unit 3", "word": "as a result", "meaning": "結果として、結果的に", "partOfSpeech": "熟語" },
  { "id": 103, "unit": "Unit 3", "word": "native", "meaning": "生まれ故郷の、生来の", "partOfSpeech": "形容詞" },
  { "id": 104, "unit": "Unit 3", "word": "logging", "meaning": "記録", "partOfSpeech": "熟語" },
  { "id": 105, "unit": "Unit 3", "word": "traffic accident", "meaning": "事故", "partOfSpeech": "熟語" },
  { "id": 106, "unit": "Unit 3", "word": "research", "meaning": "を研究する、研究する", "partOfSpeech": "動詞" },
  { "id": 107, "unit": "Unit 3", "word": "categorize", "meaning": "分類する", "partOfSpeech": "動詞" },
  { "id": 108, "unit": "Unit 3", "word": "critically", "meaning": "批判的に、危なく", "partOfSpeech": "副詞" },
  { "id": 109, "unit": "Unit 3", "word": "citizen", "meaning": "市民、住民", "partOfSpeech": "名詞" },
  { "id": 110, "unit": "Unit 3", "word": "ecosystem", "meaning": "生態系", "partOfSpeech": "名詞" },
  { "id": 111, "unit": "Unit 3", "word": "human being", "meaning": "人間、人類", "partOfSpeech": "熟語" },
  { "id": 112, "unit": "Unit 3", "word": "relate", "meaning": "を〜に関係させる、関連付ける", "partOfSpeech": "熟語" },
  { "id": 113, "unit": "Unit 3", "word": "release", "meaning": "を放出する、放つ", "partOfSpeech": "動詞" },
  { "id": 114, "unit": "Unit 3", "word": "reach", "meaning": "に着く、到着する", "partOfSpeech": "動詞" },
  { "id": 115, "unit": "Unit 3", "word": "nowadays", "meaning": "最近、近頃", "partOfSpeech": "名詞" },
  { "id": 116, "unit": "Unit 3", "word": "continue", "meaning": "を続ける、継続する", "partOfSpeech": "熟語" },
  { "id": 117, "unit": "Unit 3", "word": "crested ibis", "meaning": "トキ", "partOfSpeech": "熟語" },
  { "id": 118, "unit": "Unit 3", "word": "item", "meaning": "項目、品目", "partOfSpeech": "名詞" },
  { "id": 119, "unit": "Unit 3", "word": "piece", "meaning": "断片、かけら", "partOfSpeech": "名詞" },
  { "id": 120, "unit": "Unit 3", "word": "clothing", "meaning": "衣料品、服", "partOfSpeech": "熟語" },
  { "id": 121, "unit": "Unit 3", "word": "wrap", "meaning": "を包む、包装する", "partOfSpeech": "動詞" },
  { "id": 122, "unit": "Unit 3", "word": "fold", "meaning": "を折る、折りたたむ", "partOfSpeech": "動詞" },
  { "id": 123, "unit": "Unit 3", "word": "convenient", "meaning": "便利な、利便性の", "partOfSpeech": "熟語" },
  { "id": 124, "unit": "Unit 3", "word": "instead", "meaning": "そのわりに、代わりに", "partOfSpeech": "熟語" },
  { "id": 125, "unit": "Unit 3", "word": "resource", "meaning": "資源、原料", "partOfSpeech": "名詞" },
  { "id": 126, "unit": "Unit 3", "word": "a piece of", "meaning": "ひとかけらの", "partOfSpeech": "熟語" },
  { "id": 127, "unit": "Unit 3", "word": "fold up", "meaning": "折りたたむ", "partOfSpeech": "熟語" },
  { "id": 128, "unit": "Unit 3", "word": "instead of", "meaning": "の代わりに", "partOfSpeech": "熟語" },
  { "id": 129, "unit": "Unit 3", "word": "won't", "meaning": "will notの短縮形", "partOfSpeech": "熟語" },
  { "id": 130, "unit": "Unit 3", "word": "lullaby", "meaning": "子守歌", "partOfSpeech": "名詞" },
  { "id": 131, "unit": "Unit 3", "word": "road", "meaning": "道、道路", "partOfSpeech": "名詞" },
  { "id": 132, "unit": "Unit 3", "word": "board", "meaning": "会議体", "partOfSpeech": "名詞" },
  { "id": 133, "unit": "Unit 3", "word": "bomb", "meaning": "爆弾、爆発物", "partOfSpeech": "名詞" },
  { "id": 134, "unit": "Unit 3", "word": "lost", "meaning": "負けた、敗れた", "partOfSpeech": "名詞" },
  { "id": 135, "unit": "Unit 3", "word": "injure", "meaning": "を傷つける、痛める", "partOfSpeech": "熟語" },
  { "id": 136, "unit": "Unit 3", "word": "shade", "meaning": "陰、日陰", "partOfSpeech": "名詞" },
  { "id": 137, "unit": "Unit 3", "word": "dead", "meaning": "死んだ、死亡した", "partOfSpeech": "名詞" },
  { "id": 138, "unit": "Unit 3", "word": "weak", "meaning": "弱い、弱々しい", "partOfSpeech": "形容詞" },
  { "id": 139, "unit": "Unit 3", "word": "mommy", "meaning": "お母さん", "partOfSpeech": "名詞" },
  { "id": 140, "unit": "Unit 3", "word": "cry", "meaning": "泣く、涙を流す", "partOfSpeech": "動詞" },
  { "id": 141, "unit": "Unit 3", "word": "held", "meaning": "開催した、催した", "partOfSpeech": "名詞" },
  { "id": 142, "unit": "Unit 3", "word": "while", "meaning": "しばらくの間、短期間", "partOfSpeech": "名詞" },
  { "id": 143, "unit": "Unit 3", "word": "quietly", "meaning": "静かに、落ち着いて", "partOfSpeech": "副詞" },
  { "id": 144, "unit": "Unit 3", "word": "after a while", "meaning": "しばらくして、しばらく後", "partOfSpeech": "熟語" },
  { "id": 145, "unit": "Unit 3", "word": "nuclear", "meaning": "核の、原子力発電の", "partOfSpeech": "形容詞" },
  { "id": 146, "unit": "Unit 3", "word": "peace", "meaning": "平和、和平", "partOfSpeech": "名詞" },
  { "id": 147, "unit": "Unit 3", "word": "bright", "meaning": "明るい、光明るの", "partOfSpeech": "形容詞" },
  { "id": 148, "unit": "Unit 3", "word": "cloudless", "meaning": "雲のない", "partOfSpeech": "形容詞" },
  { "id": 149, "unit": "Unit 3", "word": "death", "meaning": "死、死亡", "partOfSpeech": "名詞" },
  { "id": 150, "unit": "Unit 3", "word": "sky", "meaning": "空、空間", "partOfSpeech": "名詞" },
  { "id": 151, "unit": "Unit 3", "word": "the", "meaning": "U.S. アメリカ合衆国", "partOfSpeech": "名詞" },
  { "id": 152, "unit": "Unit 3", "word": "president", "meaning": "大統領、国家元首", "partOfSpeech": "名詞" },
  { "id": 153, "unit": "Unit 3", "word": "meant", "meaning": "意味した、意味する", "partOfSpeech": "動詞" },
  { "id": 154, "unit": "Unit 3", "word": "war", "meaning": "戦争、争い", "partOfSpeech": "形容詞" },
  { "id": 155, "unit": "Unit 3", "word": "courage", "meaning": "勇気、気力", "partOfSpeech": "名詞" },
  { "id": 156, "unit": "Unit 3", "word": "pursue", "meaning": "を追い求める、追求する", "partOfSpeech": "動詞" },
  { "id": 157, "unit": "Unit 3", "word": "worth", "meaning": "の価値がある、価値ある", "partOfSpeech": "動詞" },
  { "id": 158, "unit": "Unit 3", "word": "extend", "meaning": "を広げる、拡大する", "partOfSpeech": "動詞" },
  { "id": 159, "unit": "Unit 3", "word": "nuclear weapon", "meaning": "核兵器", "partOfSpeech": "熟語" },
  { "id": 160, "unit": "Unit 3", "word": "agony", "meaning": "激しい苦痛", "partOfSpeech": "熟語" },
  { "id": 161, "unit": "Unit 3", "word": "paper", "meaning": "crane 折り鶴、鶴", "partOfSpeech": "名詞" },
  { "id": 162, "unit": "Unit 3", "word": "prepared", "meaning": "用意ができている、準備完了の", "partOfSpeech": "形容詞" },
  { "id": 163, "unit": "Unit 3", "word": "disaster", "meaning": "災害、天災", "partOfSpeech": "名詞" },
  { "id": 164, "unit": "Unit 3", "word": "shelter", "meaning": "避難所、避難場所", "partOfSpeech": "名詞" },
  { "id": 165, "unit": "Unit 3", "word": "store", "meaning": "を蓄える、貯蔵する", "partOfSpeech": "熟語" },
  { "id": 166, "unit": "Unit 3", "word": "case", "meaning": "場合、事例", "partOfSpeech": "名詞" },
  { "id": 167, "unit": "Unit 3", "word": "extinguisher", "meaning": "消火器、火災消火器", "partOfSpeech": "熟語" },
  { "id": 168, "unit": "Unit 3", "word": "done", "meaning": "完了した", "partOfSpeech": "熟語" },
  { "id": 169, "unit": "Unit 3", "word": "prepared", "meaning": "用意ができている、準備完了の", "partOfSpeech": "形容詞" },
  { "id": 170, "unit": "Unit 3", "word": "emergency", "meaning": "緊急事態、緊急", "partOfSpeech": "名詞" },
  { "id": 171, "unit": "Unit 3", "word": "earthquake", "meaning": "地震、震動", "partOfSpeech": "名詞" },
  { "id": 172, "unit": "Unit 3", "word": "we've", "meaning": "we haveの略", "partOfSpeech": "名詞" },
  { "id": 173, "unit": "Unit 3", "word": "hasn't", "meaning": "has notの略", "partOfSpeech": "代名詞 / 縮約形" },
  { "id": 174, "unit": "Unit 3", "word": "several", "meaning": "いくつかの", "partOfSpeech": "形容詞" },
  { "id": 175, "unit": "Unit 3", "word": "bridge", "meaning": "橋", "partOfSpeech": "名詞" },
  { "id": 176, "unit": "Unit 3", "word": "between", "meaning": "と〜の間で、〜との間", "partOfSpeech": "熟語" },
  { "id": 177, "unit": "Unit 3", "word": "energetic", "meaning": "エネルギッシュな", "partOfSpeech": "形容詞" },
  { "id": 178, "unit": "Unit 3", "word": "encourage", "meaning": "を勇気づける、励ます", "partOfSpeech": "動詞" },
  { "id": 179, "unit": "Unit 3", "word": "personality", "meaning": "人格、性格", "partOfSpeech": "熟語" },
  { "id": 180, "unit": "Unit 3", "word": "hit", "meaning": "打つ、叩く", "partOfSpeech": "動詞" },
  { "id": 181, "unit": "Unit 3", "word": "comfort", "meaning": "快適さ、慰める", "partOfSpeech": "動詞" },
  { "id": 182, "unit": "Unit 3", "word": "nearby", "meaning": "近くの", "partOfSpeech": "形容詞" },
  { "id": 183, "unit": "Unit 3", "word": "safely", "meaning": "安全に、安泰に", "partOfSpeech": "副詞" },
  { "id": 184, "unit": "Unit 3", "word": "the Great East Japan Earthquake", "meaning": "東日本大震災", "partOfSpeech": "熟語" },
  { "id": 185, "unit": "Unit 3", "word": "rode", "meaning": "乗った、乗車した", "partOfSpeech": "名詞" },
  { "id": 186, "unit": "Unit 3", "word": "bicycle", "meaning": "自転車", "partOfSpeech": "名詞" },
  { "id": 187, "unit": "Unit 3", "word": "toward", "meaning": "向かって、のほうへ", "partOfSpeech": "熟語" },
  { "id": 188, "unit": "Unit 3", "word": "apartment", "meaning": "アパート", "partOfSpeech": "名詞" },
  { "id": 189, "unit": "Unit 3", "word": "caught", "meaning": "捕まえた", "partOfSpeech": "名詞" },
  { "id": 190, "unit": "Unit 3", "word": "tsunami", "meaning": "津波", "partOfSpeech": "名詞" },
  { "id": 191, "unit": "Unit 3", "word": "sudden", "meaning": "突然の、急な", "partOfSpeech": "形容詞" },
  { "id": 192, "unit": "Unit 3", "word": "news", "meaning": "ニュース", "partOfSpeech": "名詞" },
  { "id": 193, "unit": "Unit 3", "word": "shortly", "meaning": "まもなく", "partOfSpeech": "副詞" },
  { "id": 194, "unit": "Unit 3", "word": "corner", "meaning": "かど、隅", "partOfSpeech": "名詞" },
  { "id": 195, "unit": "Unit 3", "word": "exchange", "meaning": "交換、取り交わす", "partOfSpeech": "動詞" },
  { "id": 196, "unit": "Unit 3", "word": "program", "meaning": "企画、番組", "partOfSpeech": "名詞" },
  { "id": 197, "unit": "Unit 3", "word": "support", "meaning": "を支援する、応援する", "partOfSpeech": "動詞" },
  { "id": 198, "unit": "Unit 3", "word": "ordinary", "meaning": "ふつうの、通常の", "partOfSpeech": "熟語" },
  { "id": 199, "unit": "Unit 3", "word": "crisis", "meaning": "危機、困難", "partOfSpeech": "名詞" },
  { "id": 200, "unit": "Unit 3", "word": "keep on doing", "meaning": "し続ける", "partOfSpeech": "熟語" },
  { "id": 201, "unit": "Unit 3", "word": "no longer", "meaning": "もはや〜でない", "partOfSpeech": "熟語" },
  { "id": 202, "unit": "Unit 3", "word": "internet", "meaning": "インターネット", "partOfSpeech": "熟語" },
  { "id": 203, "unit": "Unit 3", "word": "personality", "meaning": "人格、性格", "partOfSpeech": "熟語" },
  { "id": 204, "unit": "Unit 3", "word": "image", "meaning": "画像、印象", "partOfSpeech": "名詞" },
  { "id": 205, "unit": "Unit 3", "word": "print", "meaning": "を印刷する、刷る", "partOfSpeech": "熟語" },
  { "id": 206, "unit": "Unit 3", "word": "leader", "meaning": "指導者", "partOfSpeech": "名詞" },
  { "id": 207, "unit": "Unit 3", "word": "greatly", "meaning": "大きく、かなり", "partOfSpeech": "副詞" },
  { "id": 208, "unit": "Unit 3", "word": "born", "meaning": "生まれる、誕生する", "partOfSpeech": "動詞" },
  { "id": 209, "unit": "Unit 3", "word": "national", "meaning": "国の、国家の", "partOfSpeech": "熟語" },
  { "id": 210, "unit": "Unit 3", "word": "violence", "meaning": "暴力、暴行", "partOfSpeech": "名詞" },
  { "id": 211, "unit": "Unit 3", "word": "Indian", "meaning": "インド人", "partOfSpeech": "名詞" },
  { "id": 212, "unit": "Unit 3", "word": "rupee", "meaning": "インドルピー", "partOfSpeech": "名詞" },
  { "id": 213, "unit": "Unit 3", "word": "independence", "meaning": "独立、自立", "partOfSpeech": "熟語" },
  { "id": 214, "unit": "Unit 3", "word": "fight", "meaning": "たたかう、争う", "partOfSpeech": "動詞" },
  { "id": 215, "unit": "Unit 3", "word": "protest", "meaning": "抗議する、異議を唱える", "partOfSpeech": "動詞" },
  { "id": 216, "unit": "Unit 3", "word": "tough", "meaning": "困難な、難しい", "partOfSpeech": "熟語" },
  { "id": 217, "unit": "Unit 3", "word": "fast", "meaning": "速い", "partOfSpeech": "形容詞" },
  { "id": 218, "unit": "Unit 3", "word": "human rights", "meaning": "人権、権利", "partOfSpeech": "熟語" },
  { "id": 219, "unit": "Unit 3", "word": "go on", "meaning": "する、始める", "partOfSpeech": "熟語" },
  { "id": 220, "unit": "Unit 3", "word": "lawyer", "meaning": "弁護士、法律家", "partOfSpeech": "名詞" },
  { "id": 221, "unit": "Unit 3", "word": "British", "meaning": "英国人", "partOfSpeech": "名詞" },
  { "id": 222, "unit": "Unit 3", "word": "discrimination", "meaning": "差別、差別的な", "partOfSpeech": "熟語" },
  { "id": 223, "unit": "Unit 3", "word": "freely", "meaning": "自由にして、勝手に", "partOfSpeech": "副詞" },
  { "id": 224, "unit": "Unit 3", "word": "sidewalk", "meaning": "歩道、歩行者道", "partOfSpeech": "名詞" },
  { "id": 225, "unit": "Unit 3", "word": "accept", "meaning": "を受け入れる、受容する", "partOfSpeech": "動詞" },
  { "id": 226, "unit": "Unit 3", "word": "lawyer", "meaning": "弁護士、法律家", "partOfSpeech": "名詞" },
  { "id": 227, "unit": "Unit 3", "word": "unfair", "meaning": "不公平な、不当な", "partOfSpeech": "形容詞" },
  { "id": 228, "unit": "Unit 3", "word": "stood", "meaning": "立った", "partOfSpeech": "熟語" },
  { "id": 229, "unit": "Unit 3", "word": "effective", "meaning": "効果的な、有効な", "partOfSpeech": "形容詞" },
  { "id": 230, "unit": "Unit 3", "word": "at", "meaning": "that time あの時は", "partOfSpeech": "名詞" },
  { "id": 231, "unit": "Unit 3", "word": "go", "meaning": "out 外出する、出かける", "partOfSpeech": "動詞" },
  { "id": 232, "unit": "Unit 3", "word": "even", "meaning": "if たとえ〜だとしても、仮に〜であっても", "partOfSpeech": "熟語" },

  // ================= Unit 4 =================
  { "id": 233, "unit": "Unit 4", "word": "colony", "meaning": "植民地、群体", "partOfSpeech": "熟語" },
  { "id": 234, "unit": "Unit 4", "word": "produce", "meaning": "を生産する、生産", "partOfSpeech": "名詞" },
  { "id": 235, "unit": "Unit 4", "word": "tax", "meaning": "税、税金", "partOfSpeech": "名詞" },
  { "id": 236, "unit": "Unit 4", "word": "expensive", "meaning": "高価な、費用のかかる", "partOfSpeech": "動詞" },
  { "id": 237, "unit": "Unit 4", "word": "follower", "meaning": "支持者、支持する人", "partOfSpeech": "名詞" },
  { "id": 238, "unit": "Unit 4", "word": "thousand", "meaning": "千", "partOfSpeech": "名詞" },
  { "id": 239, "unit": "Unit 4", "word": "kilometer", "meaning": "キロメートル", "partOfSpeech": "名詞" },
  { "id": 240, "unit": "Unit 4", "word": "march", "meaning": "3月", "partOfSpeech": "名詞" },
  { "id": 241, "unit": "Unit 4", "word": "peace", "meaning": "平和、和平", "partOfSpeech": "名詞" },
  { "id": 242, "unit": "Unit 4", "word": "legacy", "meaning": "遺産、相続", "partOfSpeech": "名詞" },
  { "id": 243, "unit": "Unit 4", "word": "in", "meaning": "those days 当時は、その時は", "partOfSpeech": "熟語" },
  { "id": 244, "unit": "Unit 4", "word": "thousands of", "meaning": "何千もの、数千の", "partOfSpeech": "熟語" },
  { "id": 245, "unit": "Unit 4", "word": "way to", "meaning": "〜する方法", "partOfSpeech": "熟語" },
  { "id": 246, "unit": "Unit 4", "word": "text", "meaning": "本文、書かれたもの", "partOfSpeech": "形容詞" },
  { "id": 247, "unit": "Unit 4", "word": "ban", "meaning": "を禁止する、禁制する", "partOfSpeech": "動詞" },
  { "id": 248, "unit": "Unit 4", "word": "electronic", "meaning": "電子の、電子に関する", "partOfSpeech": "熟語" },
  { "id": 249, "unit": "Unit 4", "word": "device", "meaning": "装置、機器", "partOfSpeech": "名詞" },
  { "id": 250, "unit": "Unit 4", "word": "cross", "meaning": "を横切る、渡る", "partOfSpeech": "動詞" },
  { "id": 251, "unit": "Unit 4", "word": "decision", "meaning": "決定、決心", "partOfSpeech": "熟語" },
  { "id": 252, "unit": "Unit 4", "word": "bother", "meaning": "面倒、手間", "partOfSpeech": "名詞" },
  { "id": 253, "unit": "Unit 4", "word": "common", "meaning": "共通の、類似の", "partOfSpeech": "熟語" },
  { "id": 254, "unit": "Unit 4", "word": "report", "meaning": "報告、連絡", "partOfSpeech": "名詞" },
  { "id": 255, "unit": "Unit 4", "word": "position", "meaning": "位置", "partOfSpeech": "熟語" },
  { "id": 256, "unit": "Unit 4", "word": "chance", "meaning": "チャンス", "partOfSpeech": "名詞" },
  { "id": 257, "unit": "Unit 4", "word": "opportunity", "meaning": "機会、好機", "partOfSpeech": "名詞" },
  { "id": 258, "unit": "Unit 4", "word": "sort", "meaning": "種類、種", "partOfSpeech": "名詞" },
  { "id": 259, "unit": "Unit 4", "word": "warehouse", "meaning": "倉庫", "partOfSpeech": "名詞" },
  { "id": 260, "unit": "Unit 4", "word": "distribute", "meaning": "配布する", "partOfSpeech": "動詞" },
  { "id": 261, "unit": "Unit 4", "word": "client", "meaning": "顧客、依頼人", "partOfSpeech": "名詞" },
  { "id": 262, "unit": "Unit 4", "word": "riverbank", "meaning": "土手", "partOfSpeech": "名詞" },
  { "id": 263, "unit": "Unit 4", "word": "wetland", "meaning": "湿地", "partOfSpeech": "名詞" },
  { "id": 264, "unit": "Unit 4", "word": "biological", "meaning": "生物学上の", "partOfSpeech": "形容詞" },
  { "id": 265, "unit": "Unit 4", "word": "form", "meaning": "形態、を形成する", "partOfSpeech": "動詞" },
  { "id": 266, "unit": "Unit 4", "word": "diverse", "meaning": "多様な", "partOfSpeech": "形容詞" },
  { "id": 267, "unit": "Unit 4", "word": "migratory bird", "meaning": "渡り鳥", "partOfSpeech": "熟語" },
  { "id": 268, "unit": "Unit 4", "word": "rain gear", "meaning": "雨具", "partOfSpeech": "熟語" },
  { "id": 269, "unit": "Unit 4", "word": "bug spray", "meaning": "虫よけ", "partOfSpeech": "熟語" },
  { "id": 270, "unit": "Unit 4", "word": "sunscreen", "meaning": "日焼け止め", "partOfSpeech": "名詞" },
  { "id": 271, "unit": "Unit 4", "word": "provide", "meaning": "を供給する、提供する", "partOfSpeech": "動詞" },
  { "id": 272, "unit": "Unit 4", "word": "one-on-one", "meaning": "一対一の", "partOfSpeech": "熟語" },
  { "id": 273, "unit": "Unit 4", "word": "difficulty", "meaning": "困難", "partOfSpeech": "名詞" },
  { "id": 274, "unit": "Unit 4", "word": "supervision", "meaning": "監督", "partOfSpeech": "熟語" },
  { "id": 275, "unit": "Unit 4", "word": "guidance", "meaning": "ガイダンス", "partOfSpeech": "名詞" },

  // ================= Unit 5 =================
  { "id": 276, "unit": "Unit 5", "word": "problem-solving", "meaning": "問題解決", "partOfSpeech": "熟語" },
  { "id": 277, "unit": "Unit 5", "word": "management", "meaning": "管理", "partOfSpeech": "名詞" },
  { "id": 278, "unit": "Unit 5", "word": "nursing home", "meaning": "医療介護施設", "partOfSpeech": "熟語" },
  { "id": 279, "unit": "Unit 5", "word": "available", "meaning": "利用できる", "partOfSpeech": "動詞" },
  { "id": 280, "unit": "Unit 5", "word": "formally", "meaning": "正式に", "partOfSpeech": "副詞" },
  { "id": 281, "unit": "Unit 5", "word": "via", "meaning": "〜経由で、を経て", "partOfSpeech": "熟語" },
  { "id": 282, "unit": "Unit 5", "word": "transportation", "meaning": "交通、輸送", "partOfSpeech": "熟語" },
  { "id": 283, "unit": "Unit 5", "word": "fill", "meaning": "いっぱいにする、満たす", "partOfSpeech": "動詞" },
  { "id": 284, "unit": "Unit 5", "word": "backpack", "meaning": "バックパック", "partOfSpeech": "名詞" },
  { "id": 285, "unit": "Unit 5", "word": "overseas", "meaning": "海外の、外国の", "partOfSpeech": "形容詞" },
  { "id": 286, "unit": "Unit 5", "word": "unused", "meaning": "未使用の、使用されていない", "partOfSpeech": "形容詞" },
  { "id": 287, "unit": "Unit 5", "word": "donate", "meaning": "を寄付する、寄贈する", "partOfSpeech": "熟語" },
  { "id": 288, "unit": "Unit 5", "word": "Afghanistan", "meaning": "アフガニスタン人", "partOfSpeech": "名詞" },
  { "id": 289, "unit": "Unit 5", "word": "definitely", "meaning": "もちろん、確かに", "partOfSpeech": "熟語" },
  { "id": 290, "unit": "Unit 5", "word": "so far", "meaning": "これまでは、これまでの", "partOfSpeech": "熟語" },
  { "id": 291, "unit": "Unit 5", "word": "imagine", "meaning": "想像する、思い描く", "partOfSpeech": "熟語" },
  { "id": 292, "unit": "Unit 5", "word": "illiterate", "meaning": "読み書きのできない、識字能力がない", "partOfSpeech": "形容詞" },
  { "id": 293, "unit": "Unit 5", "word": "son", "meaning": "息子、男の子供", "partOfSpeech": "熟語" },
  { "id": 294, "unit": "Unit 5", "word": "ready", "meaning": "用意ができている、準備完了", "partOfSpeech": "名詞" },
  { "id": 295, "unit": "Unit 5", "word": "air", "meaning": "空気", "partOfSpeech": "名詞" },
  { "id": 296, "unit": "Unit 5", "word": "service", "meaning": "サービス", "partOfSpeech": "名詞" },
  { "id": 297, "unit": "Unit 5", "word": "globe", "meaning": "地球", "partOfSpeech": "名詞" },
  { "id": 298, "unit": "Unit 5", "word": "connect", "meaning": "を結びつける、結合する", "partOfSpeech": "熟語" },
  { "id": 299, "unit": "Unit 5", "word": "border", "meaning": "国境、境界", "partOfSpeech": "名詞" },
  { "id": 300, "unit": "Unit 5", "word": "encourage", "meaning": "to するように励ます", "partOfSpeech": "動詞" },
  { "id": 301, "unit": "Unit 5", "word": "most", "meaning": "of のほとんど", "partOfSpeech": "名詞" },
  { "id": 302, "unit": "Unit 5", "word": "be ready for", "meaning": "の用意ができている、準備が整っている", "partOfSpeech": "熟語" },
  { "id": 303, "unit": "Unit 5", "word": "in the open air", "meaning": "屋外で、外で", "partOfSpeech": "熟語" },
  { "id": 304, "unit": "Unit 5", "word": "depend", "meaning": "頼る、依存する", "partOfSpeech": "動詞" },
  { "id": 305, "unit": "Unit 5", "word": "survival", "meaning": "存続、生き残ること", "partOfSpeech": "名詞" },
  { "id": 306, "unit": "Unit 5", "word": "Brazil", "meaning": "ブラジル", "partOfSpeech": "名詞" },
  { "id": 307, "unit": "Unit 5", "word": "Thailand", "meaning": "タイ", "partOfSpeech": "名詞" },
  { "id": 308, "unit": "Unit 5", "word": "import", "meaning": "を輸入する、輸入", "partOfSpeech": "名詞" },
  { "id": 309, "unit": "Unit 5", "word": "quite", "meaning": "かなり、相当", "partOfSpeech": "副詞" },
  { "id": 310, "unit": "Unit 5", "word": "coat", "meaning": "コート", "partOfSpeech": "名詞" },
  { "id": 311, "unit": "Unit 5", "word": "Asian", "meaning": "アジアの", "partOfSpeech": "形容詞" },
  { "id": 312, "unit": "Unit 5", "word": "fact", "meaning": "事実、現実", "partOfSpeech": "名詞" },
  { "id": 313, "unit": "Unit 5", "word": "sold", "meaning": "売った、販売した", "partOfSpeech": "名詞" },
  { "id": 314, "unit": "Unit 5", "word": "exception", "meaning": "例外、例外的な", "partOfSpeech": "熟語" },
  { "id": 315, "unit": "Unit 5", "word": "surround", "meaning": "を囲む、囲むこと", "partOfSpeech": "名詞" },
  { "id": 316, "unit": "Unit 5", "word": "interdependent", "meaning": "相互に依存している、相互依存", "partOfSpeech": "熟語" },
  { "id": 317, "unit": "Unit 5", "word": "beyond", "meaning": "をこえたところに、超えた先に", "partOfSpeech": "熟語" },
  { "id": 318, "unit": "Unit 5", "word": "depend on", "meaning": "に頼る、依存する", "partOfSpeech": "熟語" },
  { "id": 319, "unit": "Unit 5", "word": "in fact", "meaning": "実際には", "partOfSpeech": "熟語" },
  { "id": 320, "unit": "Unit 5", "word": "debate", "meaning": "討論、議論", "partOfSpeech": "名詞" },
  { "id": 321, "unit": "Unit 5", "word": "disagree", "meaning": "意見が合わない、意見の相違", "partOfSpeech": "名詞" },
  { "id": 322, "unit": "Unit 5", "word": "judge", "meaning": "審判員、裁判官", "partOfSpeech": "名詞" },
  { "id": 323, "unit": "Unit 5", "word": "the", "meaning": "United States アメリカ合衆国", "partOfSpeech": "名詞" },
  { "id": 324, "unit": "Unit 5", "word": "variety", "meaning": "様々な、色々な", "partOfSpeech": "形容詞" },
  { "id": 325, "unit": "Unit 5", "word": "amazing", "meaning": "驚くべき、驚異的な", "partOfSpeech": "熟語" },
  { "id": 326, "unit": "Unit 5", "word": "countryside", "meaning": "田舎、農村", "partOfSpeech": "名詞" },
  { "id": 327, "unit": "Unit 5", "word": "seem", "meaning": "〜のように思われる、〜の様に見える", "partOfSpeech": "熟語" },
  { "id": 328, "unit": "Unit 5", "word": "for one thing", "meaning": "1つには、一つの理由として", "partOfSpeech": "熟語" },
  { "id": 329, "unit": "Unit 5", "word": "eat out", "meaning": "外食する、外食", "partOfSpeech": "熟語" },
  { "id": 330, "unit": "Unit 5", "word": "not at all", "meaning": "少しもない、全くない", "partOfSpeech": "熟語" },
  { "id": 331, "unit": "Unit 5", "word": "announce", "meaning": "を発表する、知らせる", "partOfSpeech": "動詞" },
  { "id": 332, "unit": "Unit 5", "word": "winner", "meaning": "勝者、受賞者", "partOfSpeech": "熟語" },
  { "id": 333, "unit": "Unit 5", "word": "move on", "meaning": "次へ進む", "partOfSpeech": "熟語" },
  { "id": 334, "unit": "Unit 5", "word": "we'll", "meaning": "we willの略", "partOfSpeech": "代名詞 / 縮約形" },
  { "id": 335, "unit": "Unit 5", "word": "electricity", "meaning": "電力、電力の", "partOfSpeech": "形容詞" },
  { "id": 336, "unit": "Unit 5", "word": "cut", "meaning": "切る、断ち切る", "partOfSpeech": "動詞" },
  { "id": 337, "unit": "Unit 5", "word": "happen", "meaning": "起こる、発生する", "partOfSpeech": "動詞" },
  { "id": 338, "unit": "Unit 5", "word": "charge", "meaning": "を充電する、充電", "partOfSpeech": "名詞" },
  { "id": 339, "unit": "Unit 5", "word": "chart", "meaning": "ひょう、図", "partOfSpeech": "名詞" },
  { "id": 340, "unit": "Unit 5", "word": "coal", "meaning": "石炭、炭", "partOfSpeech": "名詞" },
  { "id": 341, "unit": "Unit 5", "word": "natural gas", "meaning": "天然ガス", "partOfSpeech": "熟語" },
  { "id": 342, "unit": "Unit 5", "word": "relatively", "meaning": "比較的、相対的に", "partOfSpeech": "副詞" },
  { "id": 343, "unit": "Unit 5", "word": "cheap", "meaning": "安い、廉価な", "partOfSpeech": "形容詞" },
  { "id": 344, "unit": "Unit 5", "word": "furthermore", "meaning": "さらに、その上", "partOfSpeech": "副詞" },
  { "id": 345, "unit": "Unit 5", "word": "run out of", "meaning": "を使い果たす、消耗する", "partOfSpeech": "熟語" },
  { "id": 346, "unit": "Unit 5", "word": "energy", "meaning": "元気、精力", "partOfSpeech": "名詞" },
  { "id": 347, "unit": "Unit 5", "word": "control", "meaning": "を管理する、統制する", "partOfSpeech": "熟語" },
  { "id": 348, "unit": "Unit 5", "word": "radiation", "meaning": "放射線、放射性", "partOfSpeech": "熟語" },
  { "id": 349, "unit": "Unit 5", "word": "handle", "meaning": "を処理する、処置する", "partOfSpeech": "動詞" },
  { "id": 350, "unit": "Unit 5", "word": "sunshine", "meaning": "日光、太陽光", "partOfSpeech": "熟語" },
  { "id": 351, "unit": "Unit 5", "word": "wind", "meaning": "風、風気", "partOfSpeech": "熟語" },
  { "id": 352, "unit": "Unit 5", "word": "steam", "meaning": "蒸気、水蒸気", "partOfSpeech": "名詞" },
  { "id": 353, "unit": "Unit 5", "word": "wave", "meaning": "波、波浪", "partOfSpeech": "名詞" },
  { "id": 354, "unit": "Unit 5", "word": "renewable", "meaning": "再生可能な、更新可能な", "partOfSpeech": "形容詞" },
  { "id": 355, "unit": "Unit 5", "word": "dangerous", "meaning": "危険な、危険を伴う", "partOfSpeech": "動詞" },
  { "id": 356, "unit": "Unit 5", "word": "dam", "meaning": "ダム、堤防", "partOfSpeech": "名詞" },
  { "id": 357, "unit": "Unit 5", "word": "damage", "meaning": "に損害を与える、損なう", "partOfSpeech": "動詞" },
  { "id": 358, "unit": "Unit 5", "word": "progress", "meaning": "進歩、前進", "partOfSpeech": "名詞" },
  { "id": 359, "unit": "Unit 5", "word": "Denmark", "meaning": "デンマーク", "partOfSpeech": "名詞" },
  { "id": 360, "unit": "Unit 5", "word": "quarter", "meaning": "4分の1", "partOfSpeech": "名詞" },
  { "id": 361, "unit": "Unit 5", "word": "Iceland", "meaning": "アイスランド", "partOfSpeech": "名詞" },
  { "id": 362, "unit": "Unit 5", "word": "heat", "meaning": "熱、高温", "partOfSpeech": "名詞" },
  { "id": 363, "unit": "Unit 5", "word": "solve", "meaning": "を解決する、解く", "partOfSpeech": "動詞" },
  { "id": 364, "unit": "Unit 5", "word": "progress", "meaning": "進歩、前進", "partOfSpeech": "名詞" },
  { "id": 365, "unit": "Unit 5", "word": "Azerbaijan", "meaning": "アゼルバイジャン", "partOfSpeech": "名詞" },
  { "id": 366, "unit": "Unit 5", "word": "invent", "meaning": "を発明する、発案する", "partOfSpeech": "熟語" },
  { "id": 367, "unit": "Unit 5", "word": "lamp", "meaning": "明かり、光", "partOfSpeech": "名詞" },
  { "id": 368, "unit": "Unit 5", "word": "second", "meaning": "秒", "partOfSpeech": "熟語" },
  { "id": 369, "unit": "Unit 5", "word": "litter", "meaning": "ごみ", "partOfSpeech": "名詞" },
  { "id": 370, "unit": "Unit 5", "word": "rainwater", "meaning": "雨水、雨の水", "partOfSpeech": "熟語" },
  { "id": 371, "unit": "Unit 5", "word": "battery", "meaning": "電池、蓄電池", "partOfSpeech": "名詞" },
  { "id": 372, "unit": "Unit 5", "word": "sustainable", "meaning": "存続可能な、持持可能な", "partOfSpeech": "熟語" },
  { "id": 373, "unit": "Unit 5", "word": "consumer", "meaning": "消費者、購買者", "partOfSpeech": "熟語" },
  { "id": 374, "unit": "Unit 5", "word": "countryside", "meaning": "田舎、農村", "partOfSpeech": "名詞" },
  { "id": 375, "unit": "Unit 5", "word": "author", "meaning": "著者、筆者", "partOfSpeech": "名詞" },
  { "id": 376, "unit": "Unit 5", "word": "Germany", "meaning": "ドイツ人", "partOfSpeech": "名詞" },
  { "id": 377, "unit": "Unit 5", "word": "art school", "meaning": "美術学校", "partOfSpeech": "熟語" },
  { "id": 378, "unit": "Unit 5", "word": "believe", "meaning": "信じる、信頼する", "partOfSpeech": "動詞" },
  { "id": 379, "unit": "Unit 5", "word": "publish", "meaning": "公表する", "partOfSpeech": "動詞" },
  { "id": 380, "unit": "Unit 5", "word": "unusual", "meaning": "異常な、普通でない", "partOfSpeech": "形容詞" },
  { "id": 381, "unit": "Unit 5", "word": "think outside the box", "meaning": "枠にとらわれずに考える", "partOfSpeech": "熟語" },
  { "id": 382, "unit": "Unit 5", "word": "come up with", "meaning": "を思いつく、と考え出す", "partOfSpeech": "熟語" },
  { "id": 383, "unit": "Unit 5", "word": "worldwide", "meaning": "全世界", "partOfSpeech": "名詞" },
  { "id": 384, "unit": "Unit 5", "word": "toy", "meaning": "おもちゃ、玩具", "partOfSpeech": "熟語" },
  { "id": 385, "unit": "Unit 5", "word": "feature", "meaning": "特色、特徴", "partOfSpeech": "名詞" },
  { "id": 386, "unit": "Unit 5", "word": "cow", "meaning": "ウシ", "partOfSpeech": "名詞" },
  { "id": 387, "unit": "Unit 5", "word": "deliver", "meaning": "配達する", "partOfSpeech": "動詞" },
  { "id": 388, "unit": "Unit 5", "word": "reader", "meaning": "読者", "partOfSpeech": "名詞" },
  { "id": 389, "unit": "Unit 5", "word": "represent", "meaning": "を表す、代表する", "partOfSpeech": "動詞" },
  { "id": 390, "unit": "Unit 5", "word": "colorless", "meaning": "色味のない", "partOfSpeech": "形容詞" },
  { "id": 391, "unit": "Unit 5", "word": "paint", "meaning": "描く、描写する", "partOfSpeech": "熟語" },
  { "id": 392, "unit": "Unit 5", "word": "inspire", "meaning": "鼓舞する", "partOfSpeech": "熟語" },
  { "id": 393, "unit": "Unit 5", "word": "until", "meaning": "まで、までは", "partOfSpeech": "名詞" },
  { "id": 394, "unit": "Unit 5", "word": "imagination", "meaning": "想像", "partOfSpeech": "熟語" },
  { "id": 395, "unit": "Unit 5", "word": "studio", "meaning": "スタジオ", "partOfSpeech": "名詞" },
  { "id": 396, "unit": "Unit 5", "word": "theater", "meaning": "劇場、演劇場", "partOfSpeech": "名詞" },
  { "id": 397, "unit": "Unit 5", "word": "fill", "meaning": "いっぱいにする、満たす", "partOfSpeech": "動詞" },
  { "id": 398, "unit": "Unit 5", "word": "visitor", "meaning": "観光客、旅行者", "partOfSpeech": "熟語" },
  { "id": 399, "unit": "Unit 5", "word": "although", "meaning": "であるけれど、そうだけど", "partOfSpeech": "名詞" },

  // ================= Unit 6 =================
  { "id": 400, "unit": "Unit 6", "word": "anymore", "meaning": "もはや", "partOfSpeech": "名詞" },
  { "id": 401, "unit": "Unit 6", "word": "spirit", "meaning": "精神", "partOfSpeech": "名詞" },
  { "id": 402, "unit": "Unit 6", "word": "unfold", "meaning": "展開する", "partOfSpeech": "動詞" },
  { "id": 403, "unit": "Unit 6", "word": "fill with", "meaning": "で満たす", "partOfSpeech": "熟語" },
  { "id": 404, "unit": "Unit 6", "word": "not only but also", "meaning": "〜だけでなく〜もまた", "partOfSpeech": "熟語" },
];

// アプリケーションの状態
let currentUnit = "";
let currentIndex = 0;
let currentMode = "en-ja"; // 'en-ja': 英語➔日本語, 'ja-en': 日本語➔英語
let currentFilteredWords = [];
let isAnswered = false;

// 成績記録用データ
let correctWords = [];
let incorrectWords = [];

const availableUnits = [...new Set(Words.map(w => w.unit))];

document.addEventListener("DOMContentLoaded", () => {
  renderUnitSelection();
  updateModeButtonsState();
});

// モード切替（トップ画面でのみ動作可能）
function setMode(mode) {
  // トップ画面にいない場合は切り替えを無視する
  const isHomeVisible = !document.getElementById("home-container").classList.contains("hidden");
  if (!isHomeVisible) return;

  currentMode = mode;
  document.getElementById("mode-en-ja").classList.toggle("active", mode === "en-ja");
  document.getElementById("mode-ja-en").classList.toggle("active", mode === "ja-en");
}

// 画面状態に応じてモード切替ボタンの有効/無効を更新
function updateModeButtonsState() {
  const isHomeVisible = !document.getElementById("home-container").classList.contains("hidden");
  const btnEnJa = document.getElementById("mode-en-ja");
  const btnJaEn = document.getElementById("mode-ja-en");

  btnEnJa.disabled = !isHomeVisible;
  btnJaEn.disabled = !isHomeVisible;
}

// トップ画面のUnitボタン一覧生成
function renderUnitSelection() {
  const container = document.getElementById("unit-selection-list");
  if (!container) return;

  let html = availableUnits.map(unit => `
    <button class="unit-select-btn" onclick="startQuiz('${unit}')">
      ${unit}
    </button>
  `).join("");

  html = `
    <button class="unit-select-btn all-words-btn" onclick="startQuiz('ALL')">
      🌟 すべての単語 (全復習)
    </button>
  ` + html;

  container.innerHTML = html;
}

// 配列をシャッフルするヘルパー関数
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// クイズ開始
function startQuiz(unitName) {
  currentUnit = unitName;
  currentIndex = 0;
  correctWords = [];
  incorrectWords = [];

  // 対象単語のフィルタリング
  let baseWords = [];
  if (unitName === "ALL") {
    baseWords = [...Words];
    document.getElementById("quiz-unit-title").textContent = "すべての単語 (全復習)";
  } else {
    baseWords = Words.filter(w => w.unit === unitName);
    document.getElementById("quiz-unit-title").textContent = unitName;
  }

  // シャッフル処理
  const shuffled = shuffleArray(baseWords);

  // 出題数の決定
  const countSelect = document.getElementById("question-count-select").value;
  if (countSelect === "all") {
    currentFilteredWords = shuffled;
  } else {
    const limit = parseInt(countSelect, 10);
    currentFilteredWords = shuffled.slice(0, limit);
  }

  showScreen("quiz-container");
  updateQuestion();
}

function showHome() {
  showScreen("home-container");
}

function showScreen(screenId) {
  document.getElementById("home-container").classList.add("hidden");
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-container").classList.add("hidden");

  document.getElementById(screenId).classList.remove("hidden");
  
  // モードボタンの活性/非活性状態を更新
  updateModeButtonsState();
}

function updateQuestion() {
  if (!currentFilteredWords.length) return;

  isAnswered = false;
  const currentWord = currentFilteredWords[currentIndex];

  const wordEl = document.getElementById("card-word");
  const promptLabel = document.getElementById("prompt-label");
  const progressEl = document.getElementById("progress");
  const inputEl = document.getElementById("type-input");
  const feedbackEl = document.getElementById("feedback-container");

  feedbackEl.classList.add("hidden");
  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();

  progressEl.textContent = `${currentIndex + 1} / ${currentFilteredWords.length}`;

  if (currentMode === "en-ja") {
    promptLabel.textContent = "問題 (英語 ➔ 日本語で入力)";
    wordEl.textContent = currentWord.word;
    inputEl.placeholder = "日本語の意味を入力";
  } else {
    promptLabel.textContent = "問題 (日本語 ➔ 英語で入力)";
    wordEl.textContent = currentWord.meaning;
    inputEl.placeholder = "英単語を入力";
  }
}

function handleCheck(event) {
  event.preventDefault();
  if (isAnswered) return;

  const inputEl = document.getElementById("type-input");
  const userInput = inputEl.value.trim();
  if (!userInput) return;

  const currentWord = currentFilteredWords[currentIndex];
  let isCorrect = false;

  if (currentMode === "en-ja") {
    const targetMeanings = currentWord.meaning.split(/[、,]/).map(m => m.trim().replace(/^〜|~/, ''));
    const cleanInput = userInput.replace(/^〜|~/, '');
    isCorrect = targetMeanings.some(m => cleanInput.includes(m) || m.includes(cleanInput));
  } else {
    const cleanUser = userInput.toLowerCase().replace(/[^a-z0-9 ']/g, '');
    const cleanTarget = currentWord.word.toLowerCase().replace(/[^a-z0-9 ']/g, '');
    isCorrect = (cleanUser === cleanTarget);
  }

  if (isCorrect) {
    correctWords.push(currentWord);
  } else {
    incorrectWords.push(currentWord);
  }

  showFeedback(isCorrect, currentWord);
}

function showFeedback(isCorrect, currentWord) {
  isAnswered = true;
  const inputEl = document.getElementById("type-input");
  const feedbackEl = document.getElementById("feedback-container");
  const resultEl = document.getElementById("feedback-result");
  const answerEl = document.getElementById("feedback-answer");

  inputEl.disabled = true;
  feedbackEl.classList.remove("hidden");

  if (isCorrect) {
    resultEl.textContent = "⭕️ 正解！";
    resultEl.className = "feedback-result correct";
  } else {
    resultEl.textContent = "❌ 不正解...";
    resultEl.className = "feedback-result incorrect";
  }

  const correctAnswerText = currentMode === "en-ja" ? currentWord.meaning : currentWord.word;
  answerEl.textContent = `正解: ${correctAnswerText}`;
}

function nextQuestion() {
  if (currentIndex < currentFilteredWords.length - 1) {
    currentIndex++;
    updateQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  showScreen("result-container");

  document.getElementById("score-correct").textContent = correctWords.length;
  document.getElementById("score-incorrect").textContent = incorrectWords.length;

  const listContainer = document.getElementById("incorrect-list-container");
  const listEl = document.getElementById("incorrect-list");
  const retryBtn = document.getElementById("retry-incorrect-btn");

  if (incorrectWords.length > 0) {
    listContainer.classList.remove("hidden");
    retryBtn.classList.remove("hidden");

    listEl.innerHTML = incorrectWords.map(w => `
      <li>
        <span class="inc-word">${w.word}</span>
        <span class="inc-meaning">${w.meaning}</span>
      </li>
    `).join("");
  } else {
    listContainer.classList.add("hidden");
    retryBtn.classList.add("hidden");
  }
}

function retryIncorrect() {
  currentFilteredWords = shuffleArray([...incorrectWords]);
  currentIndex = 0;
  correctWords = [];
  incorrectWords = [];

  document.getElementById("quiz-unit-title").textContent = "間違えた問題の復習";
  showScreen("quiz-container");
  updateQuestion();
}
