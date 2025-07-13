import { redirect } from "next/navigation";

const linkRedirects: Record<string, string> = {
  "youtube": "https://www.youtube.com/channel/UCyguZw2wraqaEm7eCyqxong",
  "blog": "/sketches",
  "services": "/episodes",
  "facebook": "https://www.facebook.com/ComedyOnTheLoose",
  "twitter": "https://twitter.com/comedyonloose",
  "instagram": "https://www.instagram.com/comedyontheloose",
  "insta": "https://www.instagram.com/comedyontheloose",
  "s2e4": "https://littleton.vod.castus.tv/vod/?video=9c530a71-6f85-46cd-a412-03cad6594fb3&nav=programs%2FComedy%20on%20the%20Loose",
  "s2e3": "https://littleton.vod.castus.tv/vod/?video=66cf6311-4e0c-4d37-825c-99ef9c70951d&nav=programs%2FComedy%20on%20the%20Loose",
  "s2e2": "https://littleton.vod.castus.tv/vod/?video=4359adb6-cb22-458b-9aa7-9e2dfc724502&nav=programs%2FComedy%20on%20the%20Loose",
  "s2e1": "https://littleton.vod.castus.tv/vod/?video=be55a815-ff13-4d38-9b1d-836bc491e9d4&nav=programs%2FComedy%20on%20the%20Loose",
  "s1e4": "https://littleton.vod.castus.tv/vod/?video=066cb0f3-60c0-4658-8107-82d76a8c2420&nav=programs%2FComedy%20on%20the%20Loose",
  "s1e3": "https://littleton.vod.castus.tv/vod/?video=5a09bf2b-ed88-40a7-ad58-0bdb24981967&nav=programs%2FComedy%20on%20the%20Loose",
  "s1e2": "https://littleton.vod.castus.tv/vod/?video=81316e0c-69c6-4874-974e-c76ba3019995&nav=programs%2FComedy%20on%20the%20Loose",
  "s1e1": "https://littleton.vod.castus.tv/vod/?video=17f9cafe-7b43-4d71-93b8-27920ce7bb8a&nav=programs%2FComedy%20on%20the%20Loose",
  "SubToCOTL": "https://www.youtube.com/channel/UCyguZw2wraqaEm7eCyqxong?sub_confirmation=1",
};

interface SketchRedirectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SketchRedirectPage(props: SketchRedirectPageProps) {
  const params = await props.params;
  const destination = linkRedirects[params.slug];

  if (!destination) {
    redirect('/');
  }
}
