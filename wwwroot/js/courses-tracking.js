window.courseTracking = {
  track: function (eventName, payload) {
    try {
      const key = "course_tracking_events";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");

      existing.push({
        eventName: eventName,
        payload: payload || {},
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      });

      localStorage.setItem(key, JSON.stringify(existing));

      // Helpful during local development.
      console.log("[courseTracking]", eventName, payload || {});
    } catch (error) {
      console.warn("[courseTracking] failed", error);
    }
  },
};
