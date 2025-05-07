---
title: "Ruining your eyes with a macOS app"
description: "This content is blocked by this server."
pubDate: "May 7 2025"
heroImage: "/eLcePn7.png"
---

I like music. I've always dreamt of creating something music related, whether that be making random
-core slop in FL Studio with 18 drum tracks, metallic screeching (amen break required), or just learning the guitar. I came
in with confidence to those two ideas of another potential hobby and left with songs worse than the ones I played on my
tiny electronic piano I was given when I was 5. The best I could do was remix MIDI songs. I never truly got to using FL
Studio because I still don't know how to install a VST.

Anyway, now I make apps and things, so yesterday I began development on Cassette. I studied some design of other music players
and I've come to realize that for whatever reason, bottom bars seem to be trendy in that space, despite bottom bars 99.9%
of the time only being on your phone- hell, they're probably in every app you have- not many things on desktop have
a bottom bar.

## Finding inspiration & bottom bars

Spotify is one of the unique apps that have a bottom bar, however,
I immediately eliminated Spotify as a potential inspiration for my design because, to put it simply, it looks terrible.
It's not native, it's slow, it's hard to read because of their terrible typography- everything about it is bad. This
is a common theme with websites wrapped in Chromium/Electron..

![](/bottombar.png)

## Other things than Spotify
### Apple Music
I used to use Apple Music by repeatedly redeeming free trials and it was an okay experience. It's a bit slow, even on
my M2 MacBook Air, and felt a bit clunky. The music quality was impeccable, though- it's better than the tin can quality
of Spotify. I don't have much to say about the design on macOS. When I began using it, I felt a bit out of place with
how the main media controls were housed at the top. As someone who used Spotify for years prior, it felt offsetting,
and I've always been curious how it would look had it been at the bottom.

![](/applemusic.png)

### Tidal
A wild bottom bar appears. Tidal is another Spotify-like app. I've never actually used it, but it caught my eye.
It's definitely not the best looking thing ever, but it looks so much better than Spotify. I wanted to try it out,
but then I was promptly shut down by the $10/mo entry fee. I don't like the blue tint on everything, but it seems
like a pretty Spotify alternative, minding the gaps of Electron.

![](/tidal.png)
<sub>image by byteneko</sub>

## Cassette
At this point I already knew what I wanted, a prettier, free Tidal. I wanted to see how far I could go if I
left the layout of Tidal alone but used macOS's design guidelines (mostly.) I replaced the top gradient of
the album art in Tidal with [the same method Apple Music uses](https://hachyderm.io/@samhenrigold/112046673914368885)
for the iOS player. It uses SceneKit, just like AM, and looks similar.

I think this is really silly, but, it's growing on me a bit. I love this a lot despite no other native apps having
a bottom bar on macOS. The silliness of the bottom bar and the prettiness of everything above I feel compliment
eachother very well.

![](/cassette.png)

The bottom bar is rather simple. It's a bit empty right now, but I'm curious to see what I will be putting in the
bottom bar. It's just SwiftUI overlay:

```swift
.overlay(alignment: .bottom) {
	...
	HStack(alignment: .center, spacing: 24) {
		Image(systemName: "backward.fill")
			.resizable()
			.scaledToFill()
			.frame(width: 16, height: 16)
			.foregroundStyle(.tertiary)
		Image(systemName: "play.fill")
			.resizable()
			.scaledToFill()
			.frame(width: 16, height: 16)
			.foregroundStyle(.tertiary)
		Image(systemName: "forward.fill")
			.resizable()
			.scaledToFill()
			.frame(width: 16, height: 16)
			.foregroundStyle(.tertiary)
	}
	.frame(maxWidth: .infinity)
	.frame(height: 75)
	.visualEffect(material: .sidebar)
	...
}
```

<br>

The catch with this is that I have to subtract 75 height from everything above, but I think it's fine
for what it's worth

This may just be the silliest but most neat thing I've ever made and I'm excited to see where I go from here.
I'm curious why we don't see that much creativity regarding app layouts on macOS/iOS and this was pretty
interesting to make. I'm probably going to keep noting stuff here about Cassette, by the end, this will be
something **free and open source** you can download and play with yourself.