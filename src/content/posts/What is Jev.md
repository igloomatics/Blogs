---
title: "Attention is All Human Need:  What is Jev"
date: 2026-09-20
tags:
  - AI
---
仙人指路：[Introducing System One Models & Jev — TypeSafe 官网文章](https://typesafe.ai/blog/introducing-system-one-models-and-jev?utm_source=chatgpt.com)

机器之心推文：[刷屏了！前OpenAI研究员做的Jev，大家为啥抢着用？](https://mp.weixin.qq.com/s/rphPh91aHpcOovORbAo2Kw)

## **TL;DR**
Jev，TypeSafe AI公司于2026年9月15日发布的模型

将大模型最后一层改成分类器，自回归变成直接输出判决（类型化的概率决策）。

面向的问题是 自动化(Automation) 而非 聊天(Chat)。

是典型的System1模型——快、直觉化。而现有的大模型大多是System2模型——慢，复杂。

采用**校准决策强化学习(RLCD)** 替代了RLHF和RLVR。

没有公开基准测试的性能对比结果。

声称“不会产生幻觉”。（原句The model never makes type errors. & It’s optimized for structured outputs and _can’t_ hallucinate.）

不属于LLM。（原句Jev is neither small nor an LLM, hence being off the intelligence Pareto curve.)

[Dev 可能的用途](https://docs.typesafe.ai/concepts/use-case-map)：

1. **Agent / Harness 决策器**：选 tool、选模型、判断是否继续 reasoning
2. **LLM 回答校验器** ：检查 jailbreak、prompt injection、回答质量
3. **超便宜 Semantic Search / Reranker**：RAG 选 context、搜索结果相关性打分、rerank，部分替代 embedding pipeline
4. **洗数据**：给几百万条文本/Agent trajectory 做分类、打分、抽 feature
5. **实时 AI** ：约 **150ms** 级决策延迟，可嵌进 UI、同声传译、游戏等实时系统

## Fun Facts

「System One」来自 Daniel Kahneman 在《Thinking, Fast and Slow》中提出的 System 1 概念，即快速、直觉式的判断系统；「Jev」则来自经济学家 William Stanley Jevons。TypeSafe 借用了「杰文斯悖论」的含义：当一种资源的使用效率大幅提高，其总体使用量反而可能迅速增长。

Jev 并行输出所有概率，而不是像 LLM 那样按词元自回归生成。字符串功能强大且通用，但成本很高。“放弃”字符串实际上赋予了我们许多超能力！

TypeSafe 主要是一个数据研究实验室，人工智能领域最伟大的成果正是通过数据研究产生的。我们所有的数据都是自己生成的。




## 随便写一点

来点组里讨论的笑话（

Attention is All Human Need：人类也有注意力额度与窗口，分为**等待时间**和**专注时间**。

人类希望得到即时的反馈。大模型费力推理Thinking一大堆时，尤其是不展示CoT的模型，你会忍不住去摸鱼刷几条小红书，去对抗等待答案的焦急。Chrome连不上网可以玩小恐龙跑酷。GPT-image-2.5生图时右键可以玩贪吃蛇。以后全部全双工！以后大模型推理时会不会有邪恶公司在这个等待时间植入一些可交互广告（x

人类对阅读一个问题的解答耐心有限。现在的system2模型无论什么小问题都会回答一大坨，首先很多都不是用户想得到的重点，其次太长的文本会给用户阅读带去一个额外的心理准备的负担，导致不想看了。只能每次加上【TL;DR】的尾缀。不过有些问题本身就应该有更好的回答方式，这个应该被后训练到啊？感觉是很人机交互的课题。

所以System1可以部分解决这些问题啊

申请了试用，正在蹲蹲