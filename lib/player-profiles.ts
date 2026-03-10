export interface PlayerGalleryItem {
  title: string;
  description: string;
}

export interface PlayerLinkItem {
  label: string;
  href: string;
}

export interface PlayerProfile {
  username: string;
  title: string;
  bio: string;
  tags: string[];
  playstyle: string;
  specialty: string;
  base: string;
  motto: string;
  links?: PlayerLinkItem[];
  gallery?: PlayerGalleryItem[];
}

interface PlayerProfileSeed extends Omit<PlayerProfile, "username"> {
  username: string;
  aliases?: string[];
}

const profileSeeds: PlayerProfileSeed[] = [
  {
    username: "Rinakii",
    aliases: ["rinakii", "rina"],
    title: "服务器维护者",
    bio: "长期维护 XPLUS 世界节奏，偏好把服务器做成一个能慢慢沉淀内容、适合长期定居的生存社区。",
    tags: ["维护", "规划", "公共工程"],
    playstyle: "偏运营与建设，平时更关注社区氛围、世界稳定和公共区域体验。",
    specialty: "公共交通、出生点规划、整体服内节奏维护。",
    base: "主要活动于出生点与公共设施区域。",
    motto: "世界要能久住，比短期热闹更重要。",
    links: [
      { label: "加入官方群聊", href: "https://qm.qq.com/q/XRU6o6bOE4" },
    ],
    gallery: [
      {
        title: "出生点与公共区",
        description: "适合作为后续补充出生点改造、公共设施和服务器代表建筑的截图入口。",
      },
      {
        title: "交通与基建",
        description: "可展示铁路、传送节点周边、公共仓库等长期维护内容。",
      },
    ],
  },
  {
    username: "XPlusBuilder",
    aliases: ["xplusbuilder", "builder"],
    title: "常驻建筑党",
    bio: "喜欢慢工出细活，擅长把普通生存材料堆出有居住感和秩序感的基地。",
    tags: ["建筑", "定居", "装饰"],
    playstyle: "以定居、扩建和整理周边环境为主，不急着冲进度，更看重长期居住体验。",
    specialty: "生存向基地设计、村庄改造、生活区动线整理。",
    base: "常在主世界生活区附近活动。",
    motto: "好看的基地，是住出来的。",
    gallery: [
      {
        title: "生活区主基地",
        description: "后续可放主基地外观、内饰或者阶段性施工截图。",
      },
      {
        title: "村庄改造",
        description: "可展示农田、道路和小型建筑群等代表作品。",
      },
    ],
  },
];

function normalizeName(name: string) {
  return decodeURIComponent(name).trim().toLowerCase();
}

export function getPlayerProfile(name: string): PlayerProfile {
  const normalizedName = normalizeName(name);
  const matchedProfile = profileSeeds.find((profile) =>
    [profile.username, ...(profile.aliases ?? [])]
      .filter(Boolean)
      .map((item) => item.toLowerCase())
      .includes(normalizedName),
  );

  if (matchedProfile) {
    return {
      username: decodeURIComponent(name),
      title: matchedProfile.title,
      bio: matchedProfile.bio,
      tags: matchedProfile.tags,
      playstyle: matchedProfile.playstyle,
      specialty: matchedProfile.specialty,
      base: matchedProfile.base,
      motto: matchedProfile.motto,
      links: matchedProfile.links,
      gallery: matchedProfile.gallery,
    };
  }

  return {
    username: decodeURIComponent(name),
    title: "XPLUS 冒险者",
    bio: "这位玩家的详细资料还没有单独登记，但已经在站点里拥有自己的档案页，后续可以继续补充简介、据点和代表作品。",
    tags: ["生存", "探索", "待补充"],
    playstyle: "当前以默认档案展示，适合后续按玩家实际玩法补充为建筑党、冒险党、红石玩家等方向。",
    specialty: "暂未填写，建议后续补充这位玩家最常做的事情或擅长领域。",
    base: "暂未公开常驻据点。",
    motto: "新的档案会随着世界一起慢慢长出来。",
    links: [
      { label: "查看新手指南", href: "/start" },
      { label: "阅读服务器规则", href: "/rules" },
    ],
    gallery: [
      {
        title: "代表作品待补充",
        description: "后续可以在这里添加基地截图、建筑截图或公共工程记录。",
      },
    ],
  };
}
