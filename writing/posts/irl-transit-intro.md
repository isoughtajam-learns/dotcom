---
title: "A new, fun transit app"
date: 2026-09-22
summary: "Exploring server side event architecture with live transit feeds"
---

I've loved trains since I was tiny and while we Americans usually aren't allowed to have nice things like walkable cities, I'm lucky to have benefitted from past infrastructure investments around the Bay Area. My post-college working life in SF was only possible because MUNI, BART, and Caltrain were affordable and effective methods of getting around town. I relied on [NextBus](https://www.sfgate.com/bayarea/article/SAN-FRANCISCO-Where-s-the-bus-NextMuni-can-2605805.php) every day, and it felt like the era of realtime, location-based mobile experiences was the beginning of something very special. Well, it was and it [wasn't](https://www.newsweek.com/bo-burnham-social-media-rant-video-elon-musk-twitter-1756570)!

I wanted to build an application that explores a few things in more detail like adminstering AWS on my own, relying on gRPC, using the common server-side-events (SSE) pattern, and delivering a light and fun Vite + React frontend. My research guided me to [GTFS](https://gtfs.org/), the gold mine of transit data. The spec is comprehensive and eventhough not every transit system in the world is using it, there is an [active community](https://gtfs.org/community/get-involved/) maintaining feeds on a volunteer basis in many cases.

## [irltransit.com](https://irltransit.com)

My contribution, IRL Transit, is kicking off as a live arrivals/departures feed with trip info details for a handful of transit systems. You can see live trips and current train status streaming in your browser. Sort the feed by expected next stop time, and filter it down to the lines and stations you care about most. Click on any event and see expected arrivals and departures through the end of the line. Any delays and negative delays(!) are along side the events they're baked into. 

Tap the notifications icon to see current Service Alerts from the agency and filter down to the alerts that affect you most. All of these choices are still there next time you come back. And the best part is if you're in a pinch you can toggle to light mode and use it as a flashlight.

My good friend Omid suggested the next logical step with realtime transit info in your pocket is to get outside and touch grass. I feel simple satisfaction when I'm able to see my surroundings outside the context of my daily routine, and I suspect this is universal. This is the feeling I want to evoke. Whether it's art or food or community activism, the stuff of life is easy to overlook.

This is a lofty goal for one of my five side projects while job hunting full time and having small kids, but I'm certain it involves a personal touch and it can't be mine alone. Taking advantage of public APIs for events and places along transit lines is one approach but there has to be more to it. I don't want to recreate a subset of Google Maps just for the sake of saying I did it.

## Inspiration

Some of my favorite travel experiences have been walking tours of cities around the world. I've been on three separate architecture tours of Chicago. I've explored [London's dark and twisted past](https://www.tripadvisor.com/Attraction_Review-g186338-d1383076-Reviews-The_Blood_And_Tears_Walk-London_England.html) multiple times. Across Western Europe I've learned history through the lens of street art and a lot of this art is in the background of this site. Maybe this angle will make these transit lines and the neighborhoods they service come alive.

The site currently supports a handful of transit systems I found interesting including [MBTA](https://www.mbta.com/) and [NY Waterways](https://www.nywaterway.com/), but I'll be focusing on creating a comprehensive Bay Area experience moving forward. 511.org provides GTFS data and connecting the systems in app is [the next main effort](https://github.com/users/isoughtajam-learns/projects/2). We have no shortage of exciting things going on in every corner of the Bay. I'm looking forward to trying to meaningfully tie it together.
 
I've wanted to build a mobile app for a long time, and it's never been easier to turn a React web app into iOS and Android apps. At Watchduty I learned about Capacitor.js and I'll be exploring that more. As I continue designing one of my goals is to be able to stand this up for any other location with its own transit systems. And GTFS is the kind of API that can make that easy.

I started this thinking it could solve a small problem for lots of people, a live feed for any ttransit system in a very long list of metro areas around the world. But I think a better approach for this era is to build something that people near me can enjoy together, something that be adopted easily by people in other places with the same goals.

Let me know if you want an early build!