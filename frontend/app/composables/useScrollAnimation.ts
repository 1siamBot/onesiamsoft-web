export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  const initObserver = () => {
    if (import.meta.server) return
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
  }

  const observe = (el: Element) => {
    if (!observer.value) initObserver()
    observer.value?.observe(el)
  }

  const vScrollAnimate = {
    mounted(el: HTMLElement, binding: { value?: number }) {
      const delay = binding.value || 0
      el.style.transitionDelay = `${delay}ms`
      el.classList.add('scroll-animate')
      observe(el)
    },
  }

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observe, vScrollAnimate }
}

export function useCountUp(target: number, duration = 2000) {
  const current = ref(0)
  const isStarted = ref(false)

  const start = () => {
    if (isStarted.value) return
    isStarted.value = true
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      current.value = Math.round(eased * target)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return { current, start }
}
