import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('With only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('With addition class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('With mods class', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined, active: false },
            ['class1', 'class2']
        )).toBe(expected)
    })
})
