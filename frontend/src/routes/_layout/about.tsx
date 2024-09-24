import { createFileRoute } from "@tanstack/react-router";

import Markdown from 'react-markdown'

import 'github-markdown-css'
import { Container } from "@chakra-ui/react";

const markdown = `
# Knogen Navigator: 学科研究导航网站

## 网站概述
探索知识的海洋，让我们的学科研究导航网站成为您的指南针。

## 数据宝藏
我们精心挑选了以下数据宝藏，以确保您的研究旅程充满发现：
- **学术论文**：探索学术界的最前沿。
- **维基百科**：为您的研究提供坚实的知识基础。
- **专利**：一窥创新的前沿阵地。
- **开源代码**：加入全球开发者的协作网络。

## 多维度研究
我们的研究方法论是多维度的，旨在为您提供一个全面的视角：
- **数量分析**：通过数据的力量揭示研究领域的深度。
- **趋势预测**：洞察未来，预测学科的发展趋势。
- **全球分布**：绘制全球研究的地理蓝图。
- **谷歌距离**：量化概念之间的亲密关系。
- **小世界网络**：揭示学科内部的复杂联系。
- **熵**：评估研究领域的多样性和丰富性。

## 研究成果
我们的研究成果将为您打开新的视野：
- **全球发展趋势**：揭示不同国家在特定学科领域的进步轨迹。
- **学科前沿**：掌握学科研究的最新动态和突破。
- **未来趋势**：预测学科领域的未来走向，发现新机遇。

## 研究的无限可能
我们坚信，研究是一个永无止境的探索。我们致力于不断拓展研究的边界，为您提供更多的可能性。

## 加入我们
我们欢迎您的加入，一起探索知识的未知领域。立即联系我们，开始您的研究之旅。
`;

export const Route = createFileRoute("/_layout/about")({
    component: About,
})

function About() {
    return (
        <Container maxW="full" p={10}>
            <Markdown className='markdown-body'>{markdown}</Markdown>
        </Container>
    )
}

export default About;