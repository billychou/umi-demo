import fonts from '@/assets/icons/iconfont.json';

const icons = fonts.glyphs.map((icon) => {
  return {
    name: icon.font_class,
    unicode: String.fromCodePoint(icon.unicode_decimal), // `\\u${icon.unicode}`,
  };
});

export const getIcon = (type: string) => {
  const matchIcon = icons.find((icon) => {
    return icon.name === type;
  }) || { unicode: '', name: 'default' };
  return matchIcon.unicode;
};

export function delParam() {
  if (!window.location.search) {
    return window.location.href;
  }
  const search = new URLSearchParams(window.location.search);
  search.delete('token');
  return `${window.location.origin}${window.location.pathname}${
    search.toString() ? '?' + search.toString() : ''
  }`;
}
