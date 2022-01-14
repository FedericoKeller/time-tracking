import { ActivityAssets } from "src/app/modules/module-dashboard";
import { ActivityProperties } from "src/app/modules/module-dashboard/components/main-report/activity-report/activity-report.component";

export type Activities = Record<ActivityAssets, ActivityProperties>;

export const ACTIVITY_MAP: Activities = {
  "Work": {
    "background": "var(--light-orange)",
    "icon": "icon-work",
  },
  "Play": {
    "background": "var(--soft-blue)",
    "icon": "icon-play",
  },
  "Study": {
    "background": "var(--light-red)",
    "icon": "icon-study",
  },
  "Exercise": {
    "background": "var(--lime-green)",
    "icon": "icon-exercise",
  },
  "Social": {
    "background": "var(--color-violet)",
    "icon": "icon-social",
  },
  "Self Care": {
    "background": "var(--soft-orange)",
    "icon": "icon-self-care",
  }
}
