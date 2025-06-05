# Docusaurus
This is a template to deploy a basic [Docusaurus](https://docusaurus.io/docs) documentation site on GitHub Pages.  

## Deployment

### GitHub Pages
To get started:

1. Click **Use this template** button at the top-right corner of the [repository](https://github.com/therepos/docusaurus).  

2. Choose **Create a new repository**.  

3. Grant read and write permission:

    _Settings_ > _Actions_ > _General_ > _Workflow permission_ > **Read and write permissions**.

4. Configure GitHub Pages:

    _Settings_ > _Pages_ > _Deploy from Branch_ > **gh-pages**.  

5. Commit any file changes to publish the updates.  

6. Visit your published site e.g. https://therepos.github.io/docusaurus/  

### Local Deployment
1. To deploy it locally::  
```
git clone https://github.com/therepos/docusaurus.git
```

2. Install npm packages:
```
cd docusaurus
npm install
npm run start
```

3. Preview site locally:
```
npm run serve
```

4. Deploy locally:
```
npm run build
```

5. Push to gh-pages:
```
npm run build
GIT_USER=<username> npm run deploy
```

6. Push to GitHub repo:
```
git add . 
git commit -m "Updates"
git push
```

## Guides

To understand more about how to use or customise the site, please refer to the official [Docusaurus Guides](https://docusaurus.io/docs/category/guides). 

### Structure

```
docusaurus
├── .github/
├── blog/  
├── └── yyyy-mm-dd-post.md      # your blog post            
├── docs/               
│   └── about/                  # your section
│       └── index.md            # your document
├── src/
│   └── css/                    
│       └── styles.css          # import css here
│   └── data/                   # optional
│   └── pages/                  
│       └── index.js            # landing page
├── static/
│   └── font/                   
│   └── img/                    # your image files
├── docusaurus.config.js
├── package-lock.json           # for fast-build
├── package.json
├── readme.md                   # optional
└── sidebars.js
```

### FAQ

1. If the workflow failed due to missing package-lock.json: 

    _Actions_ > _Generate package-lock.json_ > **Run workflow**.  

## License
This work is licensed under [Creative Commons Attribution 4.0 International](https://choosealicense.com/licenses/cc-by-4.0/#).   
If you find this template useful, please attribute a link to this repository.

## Resources
- [Base64 Converter](https://base64.guru/converter/encode/image)
- [Google Fonts](https://fonts.google.com/icons)