export const GATrackingID = "G-9WVW9TF3MP"

export type EventProps = {
  action: string
  category: string
  label: string
  value: string | number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  ;(window as any).gtag("config", GATrackingID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (event: EventProps) => {
  ;(window as any).gtag("event", event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value
  })
}
