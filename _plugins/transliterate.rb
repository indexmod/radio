module Jekyll
  module Transliterate
    def transliterate(input)
      # Простой пример замены кириллицы на латиницу
      input.tr(
        'абвгдезийклмнопрстуфхцчшщъыьэюя',
        'abvgdeziyklmnoprstufhchshshyeyua'
      ).tr(
        'АБВГДЕЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
        'ABVGDEZIYKLMNOPRSTUFHCHSHSHYEYUA'
      ).gsub(/[^0-9A-Za-z]/, '-') # заменяет пробелы и спецсимволы на "-"
    end
  end
end

Liquid::Template.register_filter(Jekyll::Transliterate)
