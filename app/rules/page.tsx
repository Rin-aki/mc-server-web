// app/rules/page.tsx
export default function RulesPage() {
  const rules = [
    { title: "尊重他人", content: "禁止言语攻击、歧视或骚扰其他玩家。" },
    { title: "禁止作弊", content: "严禁使用任何形式的外挂、透视或非法模组。" },
    { title: "保护环境", content: "禁止大范围破坏地形。" },
  ];

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-black mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        玩家守则
      </h1>
      
      <div className="space-y-8">
        {rules.map((rule, index) => (
          <div key={index} className="border-l-4 border-orange-500 pl-6 py-2">
            <h2 className="text-xl font-bold mb-2 text-white">{rule.title}</h2>
            <p className="text-slate-400 leading-relaxed">{rule.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}