import { PathEnum, ThemeEnum } from './constants';

describe('Constants', () => {
  test('PathEnum should have correct values', () => {
    expect(PathEnum.start).toBe('/');
    expect(PathEnum.about).toBe('/about');
    expect(PathEnum.project).toBe('/projects/:id');
  });

  test('ThemeEnum should have correct values', () => {
    expect(ThemeEnum.light).toBe('light');
    expect(ThemeEnum.dark).toBe('dark');
  });
});
