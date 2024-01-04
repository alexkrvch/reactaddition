import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import blankImg from 'shared/assets/png/150x150.png'
import { ArticleBlockType, ArticleType } from '../../model/consts/consts'

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2023 год?',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    views: 1058,
    createdAt: '26.08.2023',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Heikun'
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Кто я',
            paragraphs: [
                'Я обычный студент, которого сегодня выгнали со стажировки' +
                ' на направлении фронтенд. Всю свою старшую школу я хотел стать ' +
                'программистом и много кодить, создавать что-то свое, все ' +
                'предметы и экзамены мне приходилось терпеть, ведь без них' +
                ' я не мог достичь своей мечты. Сейчас в учебе у меня не все' +
                ' так гладко, хотя я и учусь в одном из ведущих вузах страны ' +
                'на техническом направлении - то, о чем я всегда мечтал.',
                'У меня появились проблемы с мотивацией, и после сообщения ' +
                'куратора о том, что моя стажировка закончилась на середине' +
                ' из-за несерьезного подхода к работе, я понял, что надо менять' +
                ' отношение ко всему в своей жизни. Я решил завести этот блог,' +
                ' чтобы найти людей со схожими интересами и делится всем тем, ' +
                'что я переживу и чему научусь на своем пути.'
            ]
        },
        {
            id: '2',
            type: ArticleBlockType.TEXT,
            title: 'Начало пути',
            paragraphs: [
                'Этот блог и будущие публикации будут содержать в основном контент ' +
                'о программировании: статьи, ресурсы, туториалы, создание приложений ' +
                'и т.д. В первых публикациях я хочу рассказать о базовых вещах, ' +
                'которые мне понадобятся для создания будущих проектов. Я давно в' +
                'ыбрал фронтенд, поэтому сейчас изучаю JavaScript, HTML, CSS.'
            ]
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            title: 'Переменные в JS',
            paragraphs: [
                'В JS есть 3 способа объявления переменной: let, var и const'
            ]
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: 'let variable;'
        },
        {
            id: '5',
            type: ArticleBlockType.IMAGE,
            src: blankImg,
            title: 'Welcome to JS'
        },
        {
            id: '6',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'С помощью let мы объявляем переменную variable. Далее ' +
                'мы можем присваивать этой переменной значение с помощью ' +
                'оператора присваивания "=".'
            ]
        },
        {
            id: '7',
            type: ArticleBlockType.CODE,
            code: 'export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps>' +
                ' = memo((props) => {\n    const {\n        className,\n        block\n    } ' +
                '= props\n\n    const { t } = useTranslation()\n\n    return (\n        ' +
                '<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>\n  ' +
                '          <Code>\n                {block.code}\n            </Code>\n     ' +
                '   </div>\n    )\n})'
        },
        {
            id: '8',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'Переменную можно сравнить с ячейкой в полке, куда мы ставим какие-нибудь ' +
                'вещи(в моём случае книги, которые я каждый раз намереваюсь прочитать).' +
                ' Так и с переменной, мы складываем в нее значения, которые в будущем будем ' +
                'использовать в коде.',
                'Но кроме let есть var, который не так часто используют для объявления ' +
                'переменной, как let. Это связано с очень важным отличием, которое я разберу ' +
                'после цикла for, потому что там мы уже будем иметь представление о' +
                ' блочной системе в коде.',
                'Синтаксис var, const такой же, как и у let:'
            ]
        },
        {
            id: '9',
            type: ArticleBlockType.CODE,
            code: 'var variable; //все так же\nvariable = "Значение";' +
                ' //тут мы сохраняем "Значение" в переменной variable'
        },
        {
            id: '10',
            type: ArticleBlockType.TEXT,
            title: 'Начало пути',
            paragraphs: [
                'Этот блог и будущие публикации будут содержать в основном контент ' +
                'о программировании: статьи, ресурсы, туториалы, создание приложений ' +
                'и т.д. В первых публикациях я хочу рассказать о базовых вещах, которые ' +
                'мне понадобятся для создания будущих проектов. Я давно выбрал фронтенд, ' +
                'поэтому сейчас изучаю JavaScript, HTML, CSS.'
            ]
        },
        {
            id: '11',
            type: ArticleBlockType.IMAGE,
            src: blankImg,
            title: "It's all what you need now about JS and how use it"
        }
    ]
}

const meta = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    data: article
                }
            }}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryDark: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    data: article
                }
            }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    data: article
                }
            }}>
                <ThemeDecorator theme={Theme.ORANGE}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryErrorLight: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    error: 'Some error'
                }
            }}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryErrorDark: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    error: 'Some error'
                }
            }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
export const PrimaryErrorOrange: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    error: 'Some error'
                }
            }}>
                <ThemeDecorator theme={Theme.ORANGE}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryLoadingLight: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    isLoading: true
                }
            }}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryLoadingDark: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    isLoading: true
                }
            }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
export const PrimaryLoadingOrange: Story = {
    args: { id: '1' },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                articleDetails: {
                    isLoading: true
                }
            }}>
                <ThemeDecorator theme={Theme.ORANGE}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
