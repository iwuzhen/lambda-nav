import { createFileRoute } from "@tanstack/react-router";

import MarkdownPreview from '@uiw/react-markdown-preview';

import { Container, useColorModeValue } from "@chakra-ui/react";

const markdown = `
# Research Navigator: 研究导航


## 一、丰富的学术分类体系
1. **arXiv 分类**：为多学科构建精细分类框架。
2. **OpenAlex 概念**：抽象概念助理解学术研究领域。
3. **MAG FOS**：大规模数据库的分类特色。
4. **大英百科分类**：提供权威百科分类。

## 二、全面的数据统计与分析
1. **知识复杂度计算**：不同领域数据各有特色。
2. **多源数据统计**：MAG、Wikipedia、Patent 的全面统计。
3. **OpenAlex 多指标**：自恋度等丰富统计。
4. **熵值统计**：不同主体的度分布熵与结构熵。

## 三、学科关系与距离测量
1. **相关度探索**：Wikipedia 和 MAG 多方面相关度。
2. **Google 距离**：多主体间的距离数据。

## 四、论文专利对比
1. **中美对比**：论文和专利在不同区域的数量对比。

## 五、特色内容
1. **奖项统计**：国际奖项信息。
2. **学术背景分析**：获奖者背景统计。
3. **工程数据**：望远镜等里程碑统计。
4. **网络统计**：Wikipedia 学科网络趋势。
5. **幂律趋势**：多个主体的幂律变化。
6. **表格归纳**：趋势二维表格总结。
7. **大学排名**：个性化世界大学排名。
`;

export const Route = createFileRoute("/_layout/about")({
    component: About,
})

function About() {
    // 
    return (
        <Container maxW="full" p={10}>
            <MarkdownPreview source={markdown} style={{ padding: 16 }}
                wrapperElement={{
                    "data-color-mode": useColorModeValue('light', 'dark')
                }}
            ></MarkdownPreview>
        </Container>
    )
}

export default About;