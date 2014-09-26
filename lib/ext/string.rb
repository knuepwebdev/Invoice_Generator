class String
  def spacerize
    capitalized_words = split('_').map {|word| word.capitalize}
    capitalized_words.join(' ')
  end
end
