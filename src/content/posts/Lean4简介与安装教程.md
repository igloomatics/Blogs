---
title: Lean4简介与安装教程
date: 2025-02-15 22:52:00
tag: [Lean]
---



笔者寒假时初步学习了Lean4。其语法还是有点小复杂。先把相关网页码在这里。

> 中文文档与安装指南:https://www.leanprover.cn/
>
> 更详细的中文安装指南:http://faculty.bicmr.pku.edu.cn/~wenzw/formal/docs/#/install
>
> 语法:https://leanprover.github.io/theorem_proving_in_lean4/introduction.html
>
> 语法(中文版):https://subfish-zhou.github.io/theorem_proving_in_lean4_zh_CN/title_page.html
>
> 数学证明:https://www.leanprover.cn/math-in-lean-zh/
>
> 定理搜索网站:https://leansearch.net/
>
> Terence Tao's lean cheatsheet
> https://docs.google.com/spreadsheets/d/1Gsn5al4hlpNc_xKoXdU6XGmMyLiX4q-LFesFVsMlANo/edit?gid=1045418473#gid=1045418473


---


> 24年7月，DeepMind的人工智能系统AlphaProof在国际数学奥林匹克（IMO）竞赛中取得了银牌成绩，成功解决了四道数学难题。其中AlphaProof是一个自学习系统，专门用于在**形式化数学语言Lean**中证明数学陈述。 它结合了预训练语言模型和AlphaZero强化学习算法，能够自动将语言的数学问题转化为Lean形式化语言在其中搜索证明步骤来验证或反驳这些问题。 


### 1. Lean 4 简介

Lean 4 是由**微软研究院**开发的最新版本的**交互式定理证明器**和通用**函数式编程**语言。作为一个**定理证明器**，开发的初衷是用来表达和证明数学命题。它可以帮助你：

1. **写数学证明**：比如证明“1 + 1 = 2”这样的数学定理。Lean 4 会一步一步地检查你的证明是否正确，确保没有漏洞。
2. **验证程序**：比如你写了一段代码，Lean 4 可以帮你证明这段代码不会出错（比如不会崩溃、不会算错）。
3. **自动化推理**：Lean 4 可以帮你自动完成一些复杂的逻辑推理，节省你的时间。

Lean 4 的应用前景举例如下:

4.  **形式化验证和程序正确性**：Lean4 可用于验证程序的数学证明，确保程序在所有输入下的正确性，特别适用于那些对安全性和正确性要求极高的领域，如操作系统、加密算法、嵌入式系统等。
5.  **自动定理证明**：Lean4 在数学研究中已经获得了广泛应用，能够辅助数学家进行复杂的定理证明和证明结构化工作，帮助发现新定理或验证已有定理的正确性。它在形式化数学领域的潜力巨大，像数学家、理论计算机科学家等都可能借助它来推进数学的形式化进程。
6.  **编程语言设计与开发**：由于 Lean4 本身是一种具有强大类型系统和依赖类型支持的编程语言，学者和开发者可以使用它来探索新的编程语言设计范式，开发出更具表达力和更高安全性的编程语言。
7.  **智能合约与区块链技术**：在区块链领域，尤其是在智能合约的形式化验证中，Lean4 可以提供可靠的工具来证明智能合约的正确性，从而避免漏洞和攻击的发生。例如，以太坊的某些智能合约就可能使用 Lean4 进行验证。
8. **AI与机器学习中的理论研究**：Lean4 可以应用于机器学习中的理论证明，特别是验证算法的正确性、效率和其他数学性质，支持更可靠的机器学习系统开发。



---

### 2. 安装Lean4

推荐阅读 https://www.leanprover.cn/

#### step1: 安装 VS Code

推荐使用`VS Code`作为IDE，可以访问[官网](https://code.visualstudio.com/download)下载

打开`VS Code` ，安装Lean4扩展(Extensions)
![Pasted image 20250217173438](https://s2.loli.net/2025/02/17/DkRpjgNPJUEoCLW.png)

#### step2: 安装Lean4

MacOS: 打开网络代理，在终端中输入

```shell 
curl https://raw.githubusercontent.com/leanprover/elan/master/elan-init.sh -sSf | sh
```


Windows 用户可以参考 [Lean 官方文档](https://leanprover.github.io/) 中的安装说明。

检验安装成功的方法：打开 `VS Code` ，新建空白文件并选择语言为 `lean4`，新建空白文件`test.lean`，输入
```lean
#eval 5 + 5
```

在 `Lean Infoview` 中如果显示 `10`，则表示 `lean4` 安装成功。

#### step3: 安装Mathematics in Lean (非必要，初学者推荐)

`Mathematics_in_lean`  是一个学习项目，旨在帮助用户理解如何在 Lean 中进行数学建模和证明。包括教程、示例和附有答案的练习题，帮助学习者掌握如何使用 Lean 来表达和证明数学概念。
在终端进入你希望使用的文件夹,输入：
```shell
git clone https://github.com/leanprover-community/mathematics_in_lean.git
```

#### step4: 安装Mathlib4 
任何定理的证明都基于一些“之前已经证明的定理”。**Mathlib4** 是 Lean 4 的数学库。它包含了大量的数学定理、定义和证明，旨在为使用 Lean 4 进行数学研究和证明提供一个广泛的基础。

在终端中进入`mathematics_in_lean`文件夹，运行以下代码以安装Mathlib4
```shell
lake exe cache get
```

若你已经完成step3，在VS Code中进入`mathematics_in_lean`中的`MIL`文件夹，进入任何一个以`.lean`结尾的子文件，进行编译（初次编译可能长达2h）。若最终没有报错，将光标移至某一定理处，`Lean Infoview`显示类似如图(0goals则说明证明结束)，说明Mathlib4安装成功。
![Pasted image 20250217175701](https://s2.loli.net/2025/02/17/eqI64Hrmi2AJ73Z.png)

配置整个环境的过程中出现问题，有可能是网络问题(多尝试几次)，也有可能是安装工具(如git,lake，brew等)出现问题(更新至最新版本或者重装)。以上是我安装时遇到的问题，仅供参考。

安装成功后，就可以根据`Mathematics_in_lean`，学习`Lean 4`的语法了。