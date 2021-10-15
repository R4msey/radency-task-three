const calcStats = (notes) => {
  const _store = new Map()

  const _count = (categories) => {
    const category = categories[0]
    const value = categories[1]

    const _countCategories = (cnt, cur) => {
      return (cnt[cur] = cnt[cur] + 1 || 1), cnt
    }

    return value.reduce(_countCategories, { category })
  }

  notes.forEach(({ category, status }) => {
    if (_store.has(category)) {
      const _currentSection = _store.get(category)

      return _currentSection.push(status)
    }

    _store.set(category, [status])
  })

  return Array.from(_store).map(_count)
}

module.exports = calcStats
