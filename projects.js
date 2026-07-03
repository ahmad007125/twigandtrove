/* ============================================================
   Twig & Trove Interiors — Project & Blog Data
   ============================================================ */

const PROJECTS = {
  portfolio: [
    {
      key: 'lodge',
      title: 'Collected Lodge',
      fetchPriority: 'high',
      description: 'A 1911 Wisconsin lodge home restored with deep respect for its original character. Dark beamed ceilings, original woodwork, and an unfitted English kitchen anchor a project that layers antique finds with contemporary upholstery — always in conversation with the architecture.',
      credits: [
        { label: 'Photography', value: 'Werner Straube' },
        { label: 'Styling', value: 'Hilary Rose' },
        { label: 'Design', value: 'Kimberly Knight' },
      ],
      imageCount: 19,
    },
    {
      key: 'modern_farmhouse',
      title: 'Modern Farmhouse',
      description: 'A new home in the Wisconsin farmhouse vernacular, with interiors by Twig & Trove. Conceived for a young family who wanted a home that lives like a great vacation — warm, easy, and deeply considered in every detail.',
      credits: [
        { label: 'Photography', value: 'Werner Straube' },
        { label: 'Styling', value: 'Hilary Rose' },
        { label: 'Editorialist', value: 'Hilary Rose' },
        { label: 'Architecture', value: 'John Vetter' },
        { label: 'Design', value: 'Kimberly Knight' },
        { label: 'Published', value: 'Luxe Interiors + Design, Sept/Oct 2019' },
      ],
      imageCount: 29,
      altTags: [
        "Wine cellar enclosed by steel windows with Verellen woolen chairs and polished concrete floors, designed by Kimberly Knight.",
        "Living room with stacked stone fireplace and mohair chairs in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Dining room with slipcovered chairs and custom oak dining table in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Kids play zone with toy storage designed by Kimberly Knight of Twig and Trove Interiors.",
        "Leather-clad wall home office study with Eames chair, Moroccan rug, and modern art, designed by Kimberly Knight of Twig and Trove Interiors.",
        "Swimming pool and outdoor living space designed by Kimberly Knight of Twig and Trove Interiors.",
        "Outdoor kitchen with steel-seamed roof in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Swimming pool and outdoor living space in a modern farmhouse designed by Dallas interior designer Kimberly Knight.",
        "Outdoor living under pergola in modern organic style designed by Kimberly Knight of Twig and Trove Interiors.",
        "Primary suite with silk wallpaper in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Victoria and Albert freestanding soaking tub with large format limestone tile and frosted glass shower enclosures in the primary bath of a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Primary suite with mohair bed, reading sconces, and custom Oushak rug designed by Kimberly Knight of Twig and Trove Interiors.",
        "Fabric wallpaper with nightstands by Skram and lamp by Mr Brown, designed by Kimberly Knight of Twig and Trove Interiors.",
        "Great room in a modern farmhouse in Mequon, Wisconsin designed by Dallas interior designer Kimberly Knight of Twig and Trove Interiors.",
        "Hide benches tucked into built-in cabinetry in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Breakfast nook with custom slipcovered chairs in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Great room kitchen with leather and steel counter stools in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Girls room with canopy bed in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Girls room with soft colors and playful details designed by Kimberly Knight of Twig and Trove Interiors.",
        "Built-in storage bookcase in the primary suite of a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Primary bath with glass and stone mosaic tile and limestone floors in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Girls jack and jill bath with modern wallpaper and lighting designed by Kimberly Knight of Twig and Trove Interiors.",
        "Pool changing room in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Mudroom family entry in a modern farmhouse designed by Kimberly Knight of Twig and Trove Interiors.",
        "Lower level recreation room with polished concrete floors and lighted art by Chris Knight Creations, designed by Kimberly Knight of Twig and Trove Interiors.",
        "Modern staircase of steel and white oak designed by Kimberly Knight of Twig and Trove Interiors.",
        "Staircase landing with daybed reading nook designed by Kimberly Knight of Twig and Trove Interiors.",
        "Exterior entry view of a handsome dark-painted modern farmhouse designed by Dallas interior designer Kimberly Knight of Twig and Trove Interiors.",
        "Home office with leather-clad walls, vintage executive chair, and bookcase with eclectic collection, designed by Kimberly Knight of Twig and Trove Interiors.",
      ],
    },
    {
      key: 'shorewood_classic',
      title: 'Shorewood Classic',
      description: 'A classic Milwaukee home brought forward with a quietly modern sensibility. Moody dining room, layered textiles, and a restrained palette that honors the house without being beholden to it.',
      credits: [
        { label: 'Photography', value: 'Kyle Szef' },
        { label: 'Design', value: 'Kimberly Knight' },
      ],
      imageCount: 12,
    },
    {
      key: 'curated_home',
      title: 'Curated Home',
      description: 'A historic River Hills farmhouse for a collector of art and objects — someone happily open to surprise and juxtaposition. The interiors honor the age of the house while celebrating the unexpected, layering pieces from different eras and origins with the confidence that comes from a deeply personal point of view.',
      credits: [
        { label: 'Photography', value: 'Werner Straube' },
        { label: 'Styling', value: 'Hilary Rose' },
        { label: 'Design', value: 'Kimberly Knight' },
      ],
      imageCount: 8,
    },
    {
      key: 'milwaukee_club',
      title: 'The Milwaukee Club',
      description: 'An institutional landmark given a new chapter. The ladies lounge redesigned with dramatic wallcovering, carefully chosen upholstery, and the kind of detail that makes a room feel both historic and alive.',
      credits: [
        { label: 'Photography', value: 'Kimberly Knight' },
        { label: 'Design', value: 'Kimberly Knight' },
      ],
      imageCount: 4,
    },
  ],
  styling: [
    {
      key: 'true_romance',
      title: 'True Romance',
      description: 'An editorial styling project for Traditional Home Magazine. A richly layered home full of collected objects, moody finishes, and the kind of rooms that feel lived-in from the moment you enter.',
      credits: [
        { label: 'Photography', value: 'Werner Straube' },
        { label: 'Styling', value: 'Kimberly Knight' },
        { label: 'Design', value: 'Summer Thornton' },
        { label: 'Published', value: 'Traditional Home Magazine' },
      ],
      imageCount: 21,
    },
    {
      key: 'carriage_house',
      title: 'Carriage House',
      description: 'A carriage house transformation styled for Traditional Home Magazine — refined, collected, and alive with the texture of layered living.',
      credits: [
        { label: 'Styling', value: 'Kimberly Knight' },
        { label: 'Published', value: 'Traditional Home Magazine' },
      ],
      imageCount: 45,
    },
    {
      key: 'designers_home',
      title: "Designer's Home",
      description: "An editorial styling project for Meredith Publications featuring Andrea Goldman's own home — a study in personal, confident design.",
      credits: [
        { label: 'Styling', value: 'Kimberly Knight' },
        { label: 'Design', value: 'Andrea Goldman' },
        { label: 'Published', value: 'Meredith Publications' },
      ],
      imageCount: 41,
    },
    {
      key: 'feeling_coastal',
      title: 'Feeling Coastal',
      description: 'A coastal home styled for Luxe Magazine, with airy interiors and a relaxed, sun-washed palette that captures the ease of life near the water.',
      credits: [
        { label: 'Photography', value: 'Michael Robinson' },
        { label: 'Styling', value: 'Kimberly Knight' },
        { label: 'Design', value: 'Andrea Goldman' },
        { label: 'Published', value: 'Luxe Magazine' },
      ],
      imageCount: 12,
    },
    {
      key: 'glencoe_family_home',
      title: 'Glencoe Family Home',
      description: "A warm family home in Glencoe styled for RSID, balancing approachable comfort with considered design and a collector's sensibility.",
      credits: [
        { label: 'Photography', value: 'Janet Mesic-Mackie' },
        { label: 'Styling', value: 'Kimberly Knight' },
        { label: 'Design', value: 'Ruthie Stebbins Design' },
        { label: 'Published', value: 'RSID' },
      ],
      imageCount: 10,
    },
  ],
};

const PRESS = [
  { pub: 'Luxe Interiors + Design', title: 'Gold List Honoree. Top Designers in the Midwest', url: 'https://luxesource.com/gold-list?year=2020' },
  { pub: 'Business of Home', title: 'Why This Wisconsin Designer Prefers to Focus on One Project at a Time', url: 'https://businessofhome.com/articles/why-this-wisconsin-designer-prefers-to-focus-on-one-project-at-a-time' },
  { pub: 'Luxe Magazine', title: 'Vacation Vibes Infuse Modern Wisconsin Farmhouse', url: 'https://luxedaily.luxesource.com/vacation-vibes-infuse-modern-wisconsin-farmhouse/' },
  { pub: 'Milwaukee Magazine', title: 'Home and Design Gold Award. Décor, Living Room Traditional', url: 'https://www.milwaukeemag.com/the-2023-home-design-awardees/' },
  { pub: 'MKE Lifestyle Magazine', title: 'Be Our Guest — Six Ways to Warm Up Your Home', url: 'https://www.mydigitalpublication.com/publication/?i=674507&article_id=3771894&view=articleBrowser&ver=html5' },
  { pub: 'Traditional Home Magazine', title: 'True Romance', url: null },
  { pub: 'Traditional Home Magazine', title: 'Carriage House', url: null },
  { pub: 'Cottage Style Magazine', title: 'Feature Editorial', url: null },
];

const BLOG_POSTS = [
  {
    key: 'highpoint',
    title: "The Hunt for One of a Kind: A Vintage Lover's Guide to High Point Market",
    date: 'May 2026',
    category: 'Trade',
    imageCount: 15,
    customImages: [
      { src: 'images/blog/highpoint-02.webp', caption: 'Antique & Design Center' },
      { src: 'images/blog/highpoint-03.webp', caption: 'Antique & Design Center' },
      { src: 'images/blog/highpoint-13.webp', caption: 'Lucky Fish Gallery at Lee Industries' },
      { src: 'images/blog/highpoint-12.webp', caption: 'Lee Industries' },
      { src: 'images/blog/highpoint-04.webp', caption: '214 Modern Vintage' },
      { src: 'images/blog/highpoint-05.webp', caption: 'Modern History' },
      { src: 'images/blog/highpoint-07.webp', caption: 'Odette Collective' },
      { src: 'images/blog/highpoint-08.webp', caption: 'Schwung' },
      { src: 'images/blog/highpoint-09.webp', caption: 'Raoul Morren at Schwung' },
      { src: 'images/blog/highpoint-14.webp', caption: 'Chelsea on Green' },
      { src: 'images/blog/highpoint-15.webp', caption: 'Chelsea on Green' },
      { src: 'images/blog/highpoint-10.webp', caption: 'Amadi Collective' },
      { src: 'images/blog/highpoint-11.webp', caption: 'Amadi Collective at Verellen' },
    ],
    body: `There's a certain thrill that comes from walking into a room and knowing — just knowing — that nothing in it came off a production line. High Point Market has always been the design world's biggest stage, but if you know where to look, it's also a treasure hunter's paradise. This spring, I made it my mission to seek out the showrooms that celebrate the rare, the storied, and the singular. No endless rows of matching sofas. No trend reports. Just genuinely good stuff — pieces with history, character, and a soul that no factory could manufacture.

Here's where I found it.

The Antique and Design Center is home base for the hunt. No better place to begin. It is essentially its own universe — a sprawling destination that sets the tone for everything a serious vintage hunter is looking for. Multiple dealers, layers of history, and the kind of density that rewards slow, careful browsing. Budget more time than you think you need — and more money too.

Lee Industries is a perennial favorite, and not only for their beautifully crafted upholstery. Within their showroom lives Lucky Fish Gallery — a curated art space that brings the same intentional eye to original artwork and objects. It is the kind of unexpected combination that makes High Point worth coming back to. Plan to spend time in both.

214 Modern Vintage nails the balance effortlessly — that sweet spot where modern sensibility meets vintage soul, offering pieces that feel completely at home in a contemporary space while carrying the warmth only age can give.

Modern History is where you will find not only new perfect vintage replica pieces that look like you may have found them in pristine condition at your favorite dealer, but also fantastic art and one-of-a-kinds curated by Michael Beaver, Modern History's President and Creative Director. If you believe that the best interiors layer eras rather than match them, Modern History is your showroom.

The new Odette Collective showroom was one of the true highlights of this market. Antiques, original artwork, and revamped vintage furnishings all living together in a space that feels curated by someone with genuinely extraordinary taste. Don't rush through this one.

Schwung is a true insider's secret. Founded by Rudi Nijssen from the Netherlands and Dominique Sente from Belgium, this High Point-based company is a masterful curator of European antiques and vintage pieces. Their warehouse opens to the public Wednesday morning — before the market officially opens — and designers and shop buyers line up early for first access. Beyond the main showroom, they also operate 313.Space, a curated market destination all its own. Also within the Schwung universe is Raoul Morren, whose work is equally worth your time. This is the kind of stop that separates the casual browsers from the real hunters.

Chelsea on Green is sophisticated and beautifully edited, with a gallery-like calm that makes it one of the more quietly exceptional stops on the floor. The kind of showroom you revisit twice just to make sure you didn't miss anything.

Amadi Collective brings a global sensibility to the floor — textiles, objects, and furnishings sourced with intention and presented with quiet confidence. A great reminder of how wide the world of design really is.

And finally, Verellen. I have been specifying Verellen for years, and every market reminds me why. The quality of construction, the depth of customization, and the restraint of the design vocabulary make this one of the most reliable names in the business. Not vintage, not one-of-a-kind — but enduring in exactly the same way.

The pieces I found here won't be replicated. They won't show up in a catalog. They exist exactly once, and now they're headed to homes that will love them. That's the whole point, isn't it?`,
  },
  {
    key: 'larder',
    title: 'The Art of Illusion: A Kitchen Larder Inspired by an Antique English Breakfront',
    date: 'May 2026',
    category: 'Design',
    imageCount: 5,
    customImages: [
      'images/blog/larder-01.webp',
      'images/blog/larder-03.webp',
      'images/blog/larder-05.webp',
      'images/blog/larder-06.webp',
    ],
    body: `When my husband and I began looking for a home, I had one non-negotiable: I wanted a kitchen I could design myself. We found exactly what I was looking for in a 1911 historic lodge home — a space with dark beamed ceilings, original woodwork, and the kind of bones that take a century to earn. A house that deserved something more considered than a traditional fitted kitchen. It deserved an unfitted kitchen. An English kitchen.

I love the English approach to kitchen design. The sense of history it brings, the feeling that a room has been collected over time rather than installed all at once. Furniture that looks like it arrived from somewhere else and simply stayed. That philosophy became the foundation for everything in this space — the painted island with its butcher block top, the antique glass-front cabinet, the farmhouse sink, the layered rugs underfoot.

But the larder was the piece I felt most strongly about from the beginning. I wanted a substantial cabinet that could conceal a full refrigerator and freezer — and I wanted it to look like it had absolutely nothing to do with either.

While researching antique pieces for the kitchen, I came across an image of an antique English breakfront that stopped me cold. I was actually considering buying it for kitchen storage — it had exactly the architectural presence and proportion I was looking for. But as I studied it, something shifted. Rather than acquiring the antique, I realized it could be the inspiration for something designed specifically for this space.

The proportions and details were all there in that photograph. The challenge was designing a piece that could accommodate a full refrigerator and freezer while delivering the utility modern storage demands — all without sacrificing an ounce of its period authenticity. I designed the larder to meet all of it. Constructed in rift sawn white oak with mahogany inlay, the upper doors conceal the refrigerator completely. The lower drawers are fully functional, save for those that create the illusion of a base — behind them lives the freezer.

The finish is where the piece truly came to life. After my extremely talented cabinetmaker completed his work, my painter and I together applied a faux finish by hand — building up patina around the knobs, varnishing and waxing, working the surface to simulate the kind of age that cannot be rushed. The goal was simple: for the larder to look as though it had always been there.

The larder stands exactly as I envisioned, anchoring the old but new kitchen — a piece that feels collected, earned, and entirely of its time. The illusion holds completely.`,
  },
  {
    key: 'cornufe',
    title: "Why I Chose a CornuFé Range for Our Dallas Kitchen — and Why I'd Do It Again",
    date: 'April 2025',
    category: 'Design',
    imageCount: 1,
    body: `There is a moment in every kitchen design when one decision makes all the other decisions easier. I have designed many kitchens — for clients across the country and for myself — and that anchoring moment never gets old. But designing for a client and designing for yourself are two entirely different experiences. With a client there are guard rails: a budget firmly held, a family's habits to honor, a spouse's opinions to reconcile, a timeline someone else is keeping. Designing your own kitchen from scratch has none of that. It is just you, a blank floor plan, and every opinion you have ever had about how a kitchen should feel. It is terrifying and wonderful in equal measure.

In our Dallas home, that freedom led me straight to a CornuFé by La Cornue.

For those unfamiliar, La Cornue is a French range manufacturer that has been making hand-built, custom ranges since 1908. Each one is essentially a piece of furniture that happens to cook. Ours is finished in a dusty blue-green with brass fittings — a color I agonized over longer than I care to admit — and it anchors the entire kitchen in a way that no other appliance could.

What I didn't fully anticipate, even as a designer with years of kitchen projects behind me, was how completely the range would dictate everything around it. Once we committed to the CornuFé, the other decisions fell into place with unusual clarity.

The backsplash had to be Breccia Capraia marble — dramatic, angular, with a fracture pattern that feels almost geological in its intensity. Anything quieter would have competed rather than complemented. The cabinetry needed to recede — a soft warm white, English country profile, brass hardware — so the range could be the star it deserved to be. The island needed grounding, which led us to a rift sawn base that introduced warmth and contrast without fighting for attention. And the floor — a herringbone in natural white oak — gave the whole room a sense of movement and craft that felt right alongside a range that is itself entirely handmade.

Every single one of those decisions was easier because the range came first.

I have always believed that great residential design starts with one anchoring decision — a piece of furniture, a fabric, a work of art, an architectural detail — that tells you who the room is. Everything else is a conversation with that first choice. In my own kitchen, the CornuFé was that decision.

CornuFé ranges require a dedicated gas line and a properly sized hood, so if you are building or renovating, involve your contractor early. The cooking performance is exceptional — true professional heat, extraordinary control. For those of us who consider the kitchen the heart of the home and mean it — who want to walk into that room every morning and feel something — a CornuFé by La Cornue is worth every penny and every month of waiting.`,
  },
  {
    key: 'milwaukeeaward',
    title: 'Milwaukee Magazine Home and Design Gold Award',
    date: 'October 2023',
    category: 'Press',
    imageCount: 1,
    body: `We were honored to receive two Gold Awards at Milwaukee Magazine's inaugural Home and Design Awards this fall — recognition that means a great deal coming from a city where we have spent over two decades building relationships, refining our practice, and doing the work.

The winning project was a room that asked a lot of itself: a living space that needed to function as a family room, a formal sitting room, and an occasional dining space, all while feeling personal rather than programmed. The solution was a layered approach that borrowed from both the house's original 1920s character and the client's own collection of antiques and contemporary art.

We are grateful to Milwaukee Magazine and to the clients who trusted us with spaces that matter to them. Awards are a reflection of a relationship, and these are relationships we are proud of.`,
  },
  {
    key: 'wallpaper',
    title: 'The Most Beautiful Wallpaper',
    date: 'September 2020',
    category: 'Design',
    imageCount: 1,
    body: `I stopped by the home of my good friend who was also my first "kinda client" before I even had a business and grabbed this quick pic of her beautiful powder room. This was the first time I'd ever measured for wallpaper and this is a doozy! Luckily, I had a great wallpaper lady who knew what she was doing with this gorgeous paper and a friend with impeccable taste. I absolutely love the way it all came together. Hopefully we will get a few photos of some other work in this lovely home sometime soon.`,
  },
  {
    key: 'upnorth',
    title: 'Going Up North without Going Dark and Drear',
    date: 'August 2020',
    category: 'Travel',
    imageCount: 6,
    body: `Here in Wisconsin it's part of the culture to go "up north" to a cottage in the summer months. I wanted to take a closer look at bright and refreshing lake homes, cabins and cottages. Here are a few beautiful, light and airy interior designs that deliver high end decor in warm and cozy packages.

Camp Wandawega may be one of the first places you think of when someone mentions Northern Wisconsin; and though it may be the blueprint, Camp Wandawega is far from your typical log cabin experience. While still delivering the authentic look and feel of an up north cottage, the interiors at Camp Wandawega have many hints of modern style that bring a fresh and contemporary feel to the traditional notion of camp style.

The best lake houses I know are not decorated — they are accumulated. A chair that was bought in 1962 and has not moved since. A quilt that someone's grandmother made. A kitchen table that has been repainted three times and will be repainted again.

That quality of things earning their place over time is what I try to bring into the work, even in rooms that are starting from scratch. The question is always: how do you make a new space feel like it has already lived a life?`,
  },
  {
    key: 'selvedge',
    title: 'Salvaging the Selvedge',
    date: 'August 2020',
    category: 'Design',
    imageCount: 3,
    body: `I fell in love with this magnificent, painterly linen that is so special in so many ways but I think my favorite thing is the selvedge. The selvedge is the finished edge of a woven fabric — the part that doesn't fray, that holds the structure of the weave together. In the textile world, it is also the mark of quality: a fabric with a clean selvedge is a fabric made with care.

This applies to upholstery, obviously — the way a welt cord is sewn, the way a cushion is filled, the alignment of a pattern across a seam. But it also applies to the broader decisions: the way a room transitions to the next one, the way a piece of furniture meets the floor, the way a window treatment is lined and weighted so it hangs correctly.

These are not glamorous decisions. They are the decisions that separate the rooms that last from the rooms that look good in photographs and nothing else.`,
  },
  {
    key: 'seainspired',
    title: 'A Sea-Inspired Bath',
    date: 'July 2020',
    category: 'Design',
    imageCount: 1,
    body: `The brief was simple: a primary bath that felt like stepping out of the house and into something quieter. The client had a particular affinity for the coast — not the bright, sandy version, but the cooler, greener, more overcast version. The kind of coast where the water is deep and the light is soft.

We used a honed blue-gray limestone for the floors and shower surround — a stone that reads almost like slate in certain lights and almost like sky in others. The fixtures are unlacquered nickel, which ages toward that same cool silver tone. The single piece of color comes from a vintage mirror with a tortoiseshell frame, found at an antique market in Chicago and refinished to its original warmth.

The result is a room that feels both specific and somehow universal — one of those spaces that seems to exist slightly outside of time.`,
  },
  {
    key: 'lakehouse',
    title: 'Lake House Extraordinaire',
    date: 'July 2020',
    category: 'Design',
    imageCount: 6,
    body: `Lake houses present a particular design challenge: they need to function as vacation homes, which means they need to be easy and forgiving and somewhat impervious to the inevitable sand and wet and general enthusiasm that comes with that use. But they also need to feel considered — not like a rental, not like a storage unit for furniture that didn't fit anywhere else.

The lake house we worked on in northern Wisconsin had been in the family for decades and had accumulated layers of decisions made at different times and with different intentions. Our job was not to start over — that would have been wrong — but to make the layers coherent. To find the thread running through all of it and pull.

The thread turned out to be the view. Every room faces the water. Every furniture arrangement is oriented toward the windows. Every piece of art we introduced relates in some way to the natural world outside. It sounds obvious when you say it, but it took several months of looking at the house before we could see it clearly.`,
  },
  {
    key: 'paletteperfect',
    title: 'Palette Perfect',
    date: 'April 2020',
    category: 'Design',
    imageCount: 1,
    body: `Color is the thing clients are most anxious about and the thing designers are most confident about, which creates an interesting dynamic in the early stages of a project. Clients often arrive with strong feelings about what they don't want — no beige, no gray, nothing that looks like a hotel — and less clarity about what they do want.

The palette conversation is really a conversation about mood. What do you want to feel when you walk into this room? Warm or cool? Enveloping or open? Serious or playful? The colors follow from the answers to those questions, not the other way around.

The palette I return to most often is built around a warm neutral — not quite white, not quite cream, something in the range of old linen or aged plaster — with two or three deeper tones that anchor the furniture and a single color that surprises. That color might be a celadon blue on a ceiling, a tobacco leather on a chair, or a deep green on a single wall. Its job is to make everything else make sense.`,
  },
];

// Helper: get image path for a project
function projectImagePath(key, index, padded = true) {
  const num = padded ? String(index).padStart(2, '0') : index;
  return `images/${key}/${key}-${num}.webp`;
}

// Helper: get cover image path
function coverImagePath(key) {
  return `images/covers/${key}.webp`;
}
