





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-612da304eac9a72f5d085232387f7f5cd82df6c73120fd97fcf0bdefacbd9b16.css" integrity="sha256-YS2jBOrJpy9dCFIyOH9/XNgt9scxIP2X/PC976y9mxY=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-9e591dcc1f30d2a6ac3773da2f8c05987a4a148bae15713c4be9bb62b6e92b26.css" integrity="sha256-nlkdzB8w0qasN3PaL4wFmHpKFIuuFXE8S+m7YrbpKyY=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>datasketches/script.js at gh-pages · nbremer/datasketches</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/5062746?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="nbremer/datasketches" property="og:title" /><meta content="https://github.com/nbremer/datasketches" property="og:url" /><meta content="datasketches - A monthly collaboration project between Shirley &amp; Nadieh" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTY2MDU4MjMyOjk1MDIzNTY4NzFlYmU2NzQzMDJiODRkZjU2YjQ3ODk1OGE0NzFjYjcwNzdmZmExNWFlZGZiZWIyZDhlNzk3MTk=--cfc7f76e010b8ac5e649b44afd2a72beaba2c6ab">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="EE74:1B451:CDCA13F:12F7B039:58EA77F9" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="EE74:1B451:CDCA13F:12F7B039:58EA77F9" name="octolytics-dimension-request_id" /><meta content="21293440" name="octolytics-actor-id" /><meta content="nancyzhao888" name="octolytics-actor-login" /><meta content="d8278cede2a4d9fe7f0276467982e50e76212b6501a9aa25808b9f38542eb4fe" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="nancyzhao888">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YWFmOGUyNDQ3Yzk3YWEzNGUxYTJkMWM1NjQ2NjI4MzFjMTY3MGMzYjc0NTcyMGJhZmVmYTNjNGI4ZTNhODg1ZXx7InJlbW90ZV9hZGRyZXNzIjoiMjQuOTAuMTQxLjcxIiwicmVxdWVzdF9pZCI6IkVFNzQ6MUI0NTE6Q0RDQTEzRjoxMkY3QjAzOTo1OEVBNzdGOSIsInRpbWVzdGFtcCI6MTQ5MTc2MTE1MiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="83ac231528e4e5497ae86f971f671d8f19095884">

  <meta http-equiv="x-pjax-version" content="2fcc845e19df9d36134e232e5e95caa9">
  

    
  <meta name="description" content="datasketches - A monthly collaboration project between Shirley &amp; Nadieh">
  <meta name="go-import" content="github.com/nbremer/datasketches git https://github.com/nbremer/datasketches.git">

  <meta content="5062746" name="octolytics-dimension-user_id" /><meta content="nbremer" name="octolytics-dimension-user_login" /><meta content="62163033" name="octolytics-dimension-repository_id" /><meta content="nbremer/datasketches" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="62163033" name="octolytics-dimension-repository_network_root_id" /><meta content="nbremer/datasketches" name="octolytics-dimension-repository_network_root_nwo" />
        <link href="https://github.com/nbremer/datasketches/commits/gh-pages.atom" rel="alternate" title="Recent Commits to datasketches:gh-pages" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/nbremer/datasketches/blob/gh-pages/july/code/nadieh/js/script.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production emoji-size-boost page-blob">
    


  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/nbremer/datasketches/search" class="js-site-search-form" data-scoped-search-url="/nbremer/datasketches/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/nbremer/datasketches/blob/gh-pages/july/code/nadieh/js/script.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="nbremer/datasketches">This repository</span>
  </div>
    <a class="dropdown-item" href="/nbremer/datasketches/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/nancyzhao888"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@nancyzhao888" class="avatar" src="https://avatars2.githubusercontent.com/u/21293440?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">nancyzhao888</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/nancyzhao888" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/nancyzhao888?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MJ8ujIp/LltOEa2iC2AHuYrZ5iT/FsQv1+2gn2s+uoXCRpD3HrHYPnDpghZxcpI/c18oF/h00MycQI077s75HQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yiM8G1I1AEfxBI1RVZFusQ5dab5MfCRXENoBuuRv87c4+oJgxvv2Is/8ouUvg/s399unjUseMLRbdyweYZ+wLw==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        


  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
    <div class="container repohead-details-container">


      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="fF0y3B/voewpzAqmfi1ZRZ1MJmodBOWF7krw8v6mPgjcj9cwLcA2VxckMzyw97/Qy5mkJSa29ylufqwjGOZI6w==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="62163033" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/nbremer/datasketches/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/nbremer/datasketches/watchers"
            aria-label="11 users are watching this repository">
            11
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/nbremer/datasketches/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PBSxr0vVAoh1TtLfBuWlnUha4KZ2cuiYdFHIS/N70ho4eK97dzDmOWQc4GkkCENPcX/QjrVGcJycQRMTOgRFmQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar nbremer/datasketches"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/nbremer/datasketches/stargazers"
           aria-label="29 users starred this repository">
          29
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/nbremer/datasketches/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Wkw06dCbfBBWGD4s/A36mNrPwDvG7QbSlDPk+FYHO/eMqQsulWhRZag74tL3H18PoRJzuis5WfvVmsa/71kNJA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star nbremer/datasketches"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/nbremer/datasketches/stargazers"
           aria-label="29 users starred this repository">
          29
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of nbremer/datasketches to your account"
              aria-label="Fork your own copy of nbremer/datasketches to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/nbremer/datasketches/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/nbremer/datasketches/network" class="social-count"
       aria-label="5 users forked this repository">
      5
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/nbremer" class="url fn" rel="author">nbremer</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/nbremer/datasketches" data-pjax="#js-repo-pjax-container">datasketches</a></strong>

</h1>

    </div>
    <div class="container">
      
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/nbremer/datasketches" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /nbremer/datasketches" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/nbremer/datasketches/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /nbremer/datasketches/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/nbremer/datasketches/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /nbremer/datasketches/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/nbremer/datasketches/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /nbremer/datasketches/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="counter">0</span>
</a>
    <a href="/nbremer/datasketches/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /nbremer/datasketches/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/nbremer/datasketches/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /nbremer/datasketches/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/nbremer/datasketches/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /nbremer/datasketches/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

    </div>
  </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/nbremer/datasketches/blob/23cd7f1a94dbc5d79c67069899f82e5fa113d923/july/code/nadieh/js/script.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:215f0c6756202df551197bac27808a9e -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">gh-pages</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/nbremer/datasketches/blob/gh-pages/july/code/nadieh/js/script.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/nbremer/datasketches/find/gh-pages"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/nbremer/datasketches"><span>datasketches</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/nbremer/datasketches/tree/gh-pages/july"><span>july</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/nbremer/datasketches/tree/gh-pages/july/code"><span>code</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/nbremer/datasketches/tree/gh-pages/july/code/nadieh"><span>nadieh</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/nbremer/datasketches/tree/gh-pages/july/code/nadieh/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">script.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/nbremer/datasketches/commit/13b985853a5fabf76b7f09667ee311dd039fc3d0" data-pjax>
          13b9858
        </a>
        <relative-time datetime="2017-02-13T13:38:35Z">Feb 13, 2017</relative-time>
      </span>
      <div>
        <img alt="@nbremer" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/5062746?v=3&amp;s=40" width="20" />
        <a href="/nbremer" class="user-mention" rel="author">nbremer</a>
          <a href="/nbremer/datasketches/commit/13b985853a5fabf76b7f09667ee311dd039fc3d0" class="message" data-pjax="true" title="Added Elvish fonts and such to July visual">Added Elvish fonts and such to July visual</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@nbremer" height="24" src="https://avatars0.githubusercontent.com/u/5062746?v=3&amp;s=48" width="24" />
            <a href="/nbremer">nbremer</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/nbremer/datasketches/raw/gh-pages/july/code/nadieh/js/script.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/nbremer/datasketches/blame/gh-pages/july/code/nadieh/js/script.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/nbremer/datasketches/commits/gh-pages/july/code/nadieh/js/script.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://mac.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/nbremer/datasketches/edit/gh-pages/july/code/nadieh/js/script.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Z6GRse4Pm78UrSExBJFjNcNnNoxA/KyuraixK//j8w+CvlzM+52Kl2x0ymjhJulUGLXJoJWN0/lpmlIzU0Z0VA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/nbremer/datasketches/delete/gh-pages/july/code/nadieh/js/script.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="B6uXOtZAnV5lZ2TcotYjg1il4I6lKmrQJUFTsXuPL7PvJraapvxArMCfKq5Wl6uPlGMhhG3CFVNiu4qlu6FDyA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      540 lines (453 sloc)
      <span class="file-info-divider"></span>
    19.4 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> margin <span class="pl-k">=</span> {left<span class="pl-k">:</span><span class="pl-c1">130</span>, top<span class="pl-k">:</span><span class="pl-c1">40</span>, right<span class="pl-k">:</span><span class="pl-c1">180</span>, bottom<span class="pl-k">:</span><span class="pl-c1">150</span>},</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">	width <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>( <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-c1">window</span>.<span class="pl-c1">innerWidth</span>, <span class="pl-c1">1200</span>) <span class="pl-k">-</span> <span class="pl-smi">margin</span>.<span class="pl-c1">left</span> <span class="pl-k">-</span> <span class="pl-smi">margin</span>.<span class="pl-c1">right</span> <span class="pl-k">-</span> <span class="pl-c1">20</span>, <span class="pl-c1">400</span>),</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    height <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>( <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-c1">window</span>.<span class="pl-c1">innerHeight</span> <span class="pl-k">-</span> <span class="pl-c1">75</span>, <span class="pl-c1">800</span>) <span class="pl-k">-</span> <span class="pl-smi">margin</span>.<span class="pl-c1">top</span> <span class="pl-k">-</span> <span class="pl-smi">margin</span>.<span class="pl-c1">bottom</span> <span class="pl-k">-</span> <span class="pl-c1">20</span>, <span class="pl-c1">400</span>),</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">    innerRadius <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(width <span class="pl-k">*</span> <span class="pl-c1">0.33</span>, height <span class="pl-k">*</span> <span class="pl-c1">.45</span>),</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">    outerRadius <span class="pl-k">=</span> innerRadius <span class="pl-k">*</span> <span class="pl-c1">1.05</span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Recalculate the width and height now that we know the radius</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">width <span class="pl-k">=</span> outerRadius <span class="pl-k">*</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">right</span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">left</span>;</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">height <span class="pl-k">=</span> outerRadius <span class="pl-k">*</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">top</span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">bottom</span>;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Reset the overall font size</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> newFontSize <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-c1">70</span>, <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">40</span>, innerRadius <span class="pl-k">*</span> <span class="pl-c1">62.5</span> <span class="pl-k">/</span> <span class="pl-c1">250</span>));</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>html<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>, newFontSize <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////// Set-up Chord parameters /////////////////</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> pullOutSize <span class="pl-k">=</span> <span class="pl-c1">20</span> <span class="pl-k">+</span> <span class="pl-c1">30</span><span class="pl-k">/</span><span class="pl-c1">135</span> <span class="pl-k">*</span> innerRadius;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> numFormat <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,.0f<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> defaultOpacity <span class="pl-k">=</span> <span class="pl-c1">0.85</span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">	fadeOpacity <span class="pl-k">=</span> <span class="pl-c1">0.05</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">						</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> loom <span class="pl-k">=</span> <span class="pl-en">loom</span>()</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">padAngle</span>(<span class="pl-c1">0.05</span>)</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>.sortSubgroups(sortAlpha)</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>.heightInner(28)</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">	.<span class="pl-en">emptyPerc</span>(<span class="pl-c1">0.2</span>)</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">	.<span class="pl-en">widthOffsetInner</span>(<span class="pl-c1">30</span>)</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>.widthOffsetInner(function(d) { return 6 * d.length; })</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">	.<span class="pl-c1">value</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">words</span>; })</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">	.<span class="pl-en">inner</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">character</span>; })</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">	.<span class="pl-en">outer</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">location</span>; });</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> arc <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">arc</span>()</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">innerRadius</span>(innerRadius<span class="pl-k">*</span><span class="pl-c1">1.01</span>)</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">outerRadius</span>(outerRadius);</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> string <span class="pl-k">=</span> <span class="pl-en">string</span>()</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">radius</span>(innerRadius)</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">	.<span class="pl-en">pullout</span>(pullOutSize);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>////////////////// Character notes ///////////////////////</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> characterNotes <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Gandalf<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Speaking almost twice as many words as the second most abundant speaker, Gandalf is taking up a large portion of dialogue in almost every location he&#39;s in, but stays rather quiet in Mordor<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Sam<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>An unexpected runner up to having spoken the most words, Sam flourishes after the battle at Amon Hen, taking up a considerable portion of the words said in both Mordor and Gondor<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Aragorn<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Although eventually being crowned in Minas Tirith, Gondor, Aragorn is by far most talkative in that other human region, Rohan, fighting a battle at Helm&#39;s Deep and convincing an army of dead<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Frodo<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Frodo seems most comfortable speaking in the Shire, (mostly) when still an innocent youth, but he feels the burden of the ring increasingly towards the end and leaves the talking to his best friend Sam<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Gimli<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Gimli is a quiet character at practically all locations until he reaches Rohan, where he speaks almost half of all his lines<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Pippin<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Like Merry, Pippin is also seen saying something at all locations, but his presence is mostly felt when he sings his song in Minas Tirith, serving the steward of Gondor, Denethor<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Merry<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Merry manages to say an average sentence worth of words at all locations, but is most active during his time with Treebeard in Fangorn forest and bonding with Eowyn in Rohan<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Boromir<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Boromir speaks his finest lines during the march up Caradhras in the Misty Mountains and right before the Uruk-hai battle at Amon Hen, Parth Galen, taking up a large portion of the total number of words spoken at those locations<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">characterNotes[<span class="pl-s"><span class="pl-pds">&quot;</span>Legolas<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Although a very memorable presence throughout the movies, Legolas speaks even less in 3 movies than Boromir, who is alive in only the first movie<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////// Create SVG //////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> svg <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#lotr-chart<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>svg<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span>, width <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">left</span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">right</span>)</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>, height <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">top</span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">bottom</span>);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>/////////////////// Read in data /////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">d3</span>.<span class="pl-en">csv</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>../../data/nadieh/lotr_words_locations.csv<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">error</span>, <span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>/////////////////// Prepare the data /////////////////////</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">data</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">d</span>.<span class="pl-smi">words</span> <span class="pl-k">=</span> <span class="pl-k">+</span><span class="pl-smi">d</span>.<span class="pl-smi">words</span>;</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Only keep the members of the fellowship &amp; remove Voiceover</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> fellowship <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Frodo<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Sam<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Pippin<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Merry<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Gandalf<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Aragorn<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Boromir<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Legolas<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Gimli<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">	data <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { </td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">fellowship</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">d</span>.<span class="pl-smi">character</span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">d</span>.<span class="pl-c1">location</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Voiceover<span class="pl-pds">&quot;</span></span>; </td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">	});	</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Aggregate the data by detailed location</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> dataAgg <span class="pl-k">=</span> <span class="pl-smi">dataGrouper</span>.<span class="pl-en">sum</span>(data, [<span class="pl-s"><span class="pl-pds">&quot;</span>location<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>character<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">dataAgg</span>.<span class="pl-c1">sort</span>(sortLocation);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Sort the inner characters based on the total number of words spoken</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Find the total number of words per character</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> dataChar <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">nest</span>()</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">key</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">character</span>; })</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">rollup</span>(<span class="pl-k">function</span>(<span class="pl-smi">leaves</span>) { <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">sum</span>(leaves, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">words</span>; }); })</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">entries</span>(dataAgg)</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>){ <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">descending</span>(<span class="pl-smi">a</span>.<span class="pl-c1">value</span>, <span class="pl-smi">b</span>.<span class="pl-c1">value</span>); });				</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Unflatten the result</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> characterOrder <span class="pl-k">=</span> <span class="pl-smi">dataChar</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">key</span>; });</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Sort the characters on a specific order</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">sortCharacter</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">	  	<span class="pl-k">return</span> <span class="pl-smi">characterOrder</span>.<span class="pl-c1">indexOf</span>(a) <span class="pl-k">-</span> <span class="pl-smi">characterOrder</span>.<span class="pl-c1">indexOf</span>(b);</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">	}<span class="pl-c"><span class="pl-c">//</span>sortCharacter</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Set more loom functions</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">	loom</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">sortSubgroups</span>(sortCharacter)</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">heightInner</span>(innerRadius<span class="pl-k">*</span><span class="pl-c1">0.75</span><span class="pl-k">/</span><span class="pl-smi">characterOrder</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>/////////////////////// Colors ///////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">					</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Color for the unique locations</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> locations <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Bree<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Emyn Muil<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Fangorn<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Gondor<span class="pl-pds">&quot;</span></span>,  <span class="pl-s"><span class="pl-pds">&quot;</span>Isengard<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Lothlorien<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Misty Mountains<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Mordor<span class="pl-pds">&quot;</span></span>,  <span class="pl-s"><span class="pl-pds">&quot;</span>Moria<span class="pl-pds">&quot;</span></span>,   <span class="pl-s"><span class="pl-pds">&quot;</span>Parth Galen<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Rivendell<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Rohan<span class="pl-pds">&quot;</span></span>,   <span class="pl-s"><span class="pl-pds">&quot;</span>The Shire<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> colors <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>#5a3511<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#47635f<span class="pl-pds">&quot;</span></span>,   <span class="pl-s"><span class="pl-pds">&quot;</span>#223e15<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#C6CAC9<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#0d1e25<span class="pl-pds">&quot;</span></span>,  <span class="pl-s"><span class="pl-pds">&quot;</span>#53821a<span class="pl-pds">&quot;</span></span>,    <span class="pl-s"><span class="pl-pds">&quot;</span>#4387AA<span class="pl-pds">&quot;</span></span>,         <span class="pl-s"><span class="pl-pds">&quot;</span>#770000<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#373F41<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#602317<span class="pl-pds">&quot;</span></span>,     <span class="pl-s"><span class="pl-pds">&quot;</span>#8D9413<span class="pl-pds">&quot;</span></span>,   <span class="pl-s"><span class="pl-pds">&quot;</span>#c17924<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#3C7E16<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleOrdinal</span>()</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">    	.<span class="pl-en">domain</span>(locations)</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">    	.<span class="pl-en">range</span>(colors);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Create a group that already holds the data</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> g <span class="pl-k">=</span> <span class="pl-smi">svg</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>translate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (width<span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">left</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (height<span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">top</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">datum</span>(<span class="pl-en">loom</span>(dataAgg));	</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>/////////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>////////////////////////// Create the filter ////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>/////////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Container for the gradients</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> defs <span class="pl-k">=</span> <span class="pl-smi">svg</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>defs<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>Filter for the outside glow</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> filter <span class="pl-k">=</span> <span class="pl-smi">defs</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>filter<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>glow<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">filter</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>feGaussianBlur<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>blur<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>stdDeviation<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>result<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>coloredBlur<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> feMerge <span class="pl-k">=</span> <span class="pl-smi">filter</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>feMerge<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">feMerge</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>feMergeNode<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>in<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>coloredBlur<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">feMerge</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>feMergeNode<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>in<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>SourceGraphic<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">  	<span class="pl-c"><span class="pl-c">//</span>////////////// Draw the ring inscription /////////////////</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">  	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> ringWrapper <span class="pl-k">=</span> <span class="pl-smi">g</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>ring-wrapper<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">var</span> ringR <span class="pl-k">=</span> innerRadius<span class="pl-k">*</span><span class="pl-c1">0.65</span>;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">  	<span class="pl-smi">ringWrapper</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>path<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>ring-path-top<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>ring-path<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, 	<span class="pl-s"><span class="pl-pds">&quot;</span>M<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-k">-</span>ringR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">0</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> A<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ringR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ringR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> 0 0,1 <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ringR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">  	<span class="pl-smi">ringWrapper</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>ring-text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>textPath<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>startOffset<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>50%<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>filter<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>url(#glow)<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>xlink:href<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#ring-path-top<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-c1">text</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>AE5,Ex26Yw1EjYzH= AE5,Exx:w%P1Dj^<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">  	<span class="pl-smi">ringWrapper</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>path<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>ring-path-bottom<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>ring-path<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, 	<span class="pl-s"><span class="pl-pds">&quot;</span>M<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-k">-</span>ringR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">0</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> A<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ringR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ringR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> 0 0,0 <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ringR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">  	<span class="pl-smi">ringWrapper</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>ring-text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>textPath<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>startOffset<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>50%<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>filter<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>url(#glow)<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>xlink:href<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#ring-path-bottom<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">  		.<span class="pl-c1">text</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>AE5,Ex37zD1EjYzH= X#w6Ykt^AT`Bz7qTp1EjY<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>/////////////////// Set-up title /////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> titles <span class="pl-k">=</span> <span class="pl-smi">g</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>texts<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">titles</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>name-title<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span>, <span class="pl-k">-</span>innerRadius<span class="pl-k">*</span><span class="pl-c1">5</span><span class="pl-k">/</span><span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">titles</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>value-title<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span>, <span class="pl-k">-</span>innerRadius<span class="pl-k">*</span><span class="pl-c1">5</span><span class="pl-k">/</span><span class="pl-c1">6</span> <span class="pl-k">+</span> <span class="pl-c1">35</span>);</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>The character pieces	</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">titles</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>character-note<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span>, innerRadius<span class="pl-k">/</span><span class="pl-c1">2</span>)</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>dy<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>0.35em<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">					</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////// Draw outer arcs /////////////////////</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> arcs <span class="pl-k">=</span> <span class="pl-smi">g</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>arcs<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">	  	.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">	   	.<span class="pl-c1">data</span>(<span class="pl-k">function</span>(<span class="pl-smi">s</span>) { <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-smi">groups</span>; })</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">	  .<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>arc-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">	  	.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-smi">d</span>.<span class="pl-smi">pullOutSize</span> <span class="pl-k">=</span> (pullOutSize <span class="pl-k">*</span> ( <span class="pl-smi">d</span>.<span class="pl-smi">startAngle</span> <span class="pl-k">&gt;</span> <span class="pl-c1">Math</span>.<span class="pl-c1">PI</span> <span class="pl-k">+</span> <span class="pl-c1">1e-2</span> <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>)); })</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line"> 	 	.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseover<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Hide all other arcs	</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.arc-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">s</span>) { <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-smi">outername</span> <span class="pl-k">===</span> <span class="pl-smi">d</span>.<span class="pl-smi">outername</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> fadeOpacity; });</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Hide all other strings</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">		    <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.string<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">		        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">s</span>) { <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-smi">outer</span>.<span class="pl-smi">outername</span> <span class="pl-k">===</span> <span class="pl-smi">d</span>.<span class="pl-smi">outername</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> fadeOpacity; });</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Hide ring text</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.ring-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, fadeOpacity);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Find the data for the strings of the hovered over location</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> locationData <span class="pl-k">=</span> <span class="pl-en">loom</span>(dataAgg).<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">s</span>) { <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-smi">outer</span>.<span class="pl-smi">outername</span> <span class="pl-k">===</span> <span class="pl-smi">d</span>.<span class="pl-smi">outername</span>; });</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Hide the characters who haven&#39;t said a word</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.inner-label<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">		        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span>Find out how many words the character said at the hovered over location</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> char <span class="pl-k">=</span> <span class="pl-smi">locationData</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-smi">outer</span>.<span class="pl-smi">innername</span> <span class="pl-k">===</span> <span class="pl-smi">s</span>.<span class="pl-c1">name</span>; });</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">char</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">0.1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line"> 	 	})</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">     	.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseout<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Show all arc labels</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.arc-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Show all strings again</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">		    <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.string<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">		        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, defaultOpacity);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Show all characters again</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.inner-label<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">		        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">		 	<span class="pl-c"><span class="pl-c">//</span>Show ring text</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.ring-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line"> 	 	});</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">		 					</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>////////////////// Draw outer labels /////////////////////</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>The text needs to be rotated with the offset in the clockwise direction</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> outerLabels <span class="pl-k">=</span> <span class="pl-smi">arcs</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-smi">d</span>.<span class="pl-smi">angle</span> <span class="pl-k">=</span> ((<span class="pl-smi">d</span>.<span class="pl-smi">startAngle</span> <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-smi">endAngle</span>) <span class="pl-k">/</span> <span class="pl-c1">2</span>); })</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>outer-labels<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text-anchor<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">angle</span> <span class="pl-k">&gt;</span> <span class="pl-c1">Math</span>.<span class="pl-c1">PI</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>end<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-c1">null</span>; })</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">i</span>) { </td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-smi">arc</span>.<span class="pl-en">centroid</span>(d);</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>translate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (c[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-smi">pullOutSize</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> c[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>rotate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-smi">d</span>.<span class="pl-smi">angle</span> <span class="pl-k">*</span> <span class="pl-c1">180</span> <span class="pl-k">/</span> <span class="pl-c1">Math</span>.<span class="pl-c1">PI</span> <span class="pl-k">-</span> <span class="pl-c1">90</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>translate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">26</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,0)<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">+</span> (<span class="pl-smi">d</span>.<span class="pl-smi">angle</span> <span class="pl-k">&gt;</span> <span class="pl-c1">Math</span>.<span class="pl-c1">PI</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>rotate(180)<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">		})</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> elvishName <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>175{#<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>7R`B4#6Y<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>x{#75$iY1<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>t%j4#7iT<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>93GlExj6T<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">                    	<span class="pl-s"><span class="pl-pds">&quot;</span>KiAZADDÚMU<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>j3Hj~N7`B5$<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>q7E3 xj#5$<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>t$I5 thUj<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">                    	<span class="pl-s"><span class="pl-pds">&quot;</span>79N5#<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>ex{#7Y5<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>x2{^6Y<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>t7Y46Y<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">  	<span class="pl-c"><span class="pl-c">//</span>The outer name in Elvish </span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">  	<span class="pl-smi">outerLabels</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">i</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">outername</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Moria<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>dwarfish-outer-label<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>elvish-outer-label<span class="pl-pds">&quot;</span></span>; })</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>dy<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>.15em<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">i</span>){ <span class="pl-k">return</span> elvishName[i]; });</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>The outer name</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">outerLabels</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>outer-label<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>dy<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>.35em<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">i</span>){ <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">outername</span>; });</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>The value below it</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">outerLabels</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>outer-label-value<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>dy<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>1.3em<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">i</span>){ <span class="pl-k">return</span> <span class="pl-en">numFormat</span>(<span class="pl-smi">d</span>.<span class="pl-c1">value</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> words<span class="pl-pds">&quot;</span></span>; });</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>////////////////// Draw outer arcs ///////////////////////</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> outerArcs <span class="pl-k">=</span> <span class="pl-smi">arcs</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>path<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>arc<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">color</span>(<span class="pl-smi">d</span>.<span class="pl-smi">outername</span>); })</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, arc)</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) { <span class="pl-c"><span class="pl-c">//</span>Pull the two slices apart</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">		  	<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>translate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-smi">pullOutSize</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">0</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">		 });</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////// Draw inner strings //////////////////////</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> strings <span class="pl-k">=</span> <span class="pl-smi">g</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>stringWrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isolation<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>isolate<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">	  .<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>path<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-c1">data</span>(<span class="pl-k">function</span>(<span class="pl-smi">strings</span>) { </td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> strings; </td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">		})</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">	  .<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>path<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mix-blend-mode<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>multiply<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, string)</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">rgb</span>( <span class="pl-en">color</span>(<span class="pl-smi">d</span>.<span class="pl-smi">outer</span>.<span class="pl-smi">outername</span>) ).<span class="pl-en">brighter</span>(<span class="pl-c1">0.2</span>) ; })</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, defaultOpacity);</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>////////////////// Draw inner labels /////////////////////</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>The text also needs to be displaced in the horizontal directions</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>And also rotated with the offset in the clockwise direction</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> innerLabels <span class="pl-k">=</span> <span class="pl-smi">g</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>inner-labels<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">	  	.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-c1">data</span>(<span class="pl-k">function</span>(<span class="pl-smi">s</span>) { <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-smi">innergroups</span>; })</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">	  .<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>inner-label<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">i</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">x</span>; })</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">i</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">y</span>; })</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">		.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text-anchor<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>middle<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">		.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>dy<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>.35em<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">	    .<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>,<span class="pl-smi">i</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">name</span>; })</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line"> 	 	.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseover<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Show all the strings of the highlighted character and hide all else</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">		    <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.string<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">		        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-smi">outer</span>.<span class="pl-smi">innername</span> <span class="pl-k">!==</span> <span class="pl-smi">d</span>.<span class="pl-c1">name</span> <span class="pl-k">?</span> fadeOpacity <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Update the word count of the outer labels</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> characterData <span class="pl-k">=</span> <span class="pl-en">loom</span>(dataAgg).<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">s</span>) { <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-smi">outer</span>.<span class="pl-smi">innername</span> <span class="pl-k">===</span> <span class="pl-smi">d</span>.<span class="pl-c1">name</span>; });</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.outer-label-value<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">s</span>,<span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span>Find which characterData is the correct one based on location</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> loc <span class="pl-k">=</span> <span class="pl-smi">characterData</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-smi">outer</span>.<span class="pl-smi">outername</span> <span class="pl-k">===</span> <span class="pl-smi">s</span>.<span class="pl-smi">outername</span>; });</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-smi">loc</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> value <span class="pl-k">=</span> loc[<span class="pl-c1">0</span>].<span class="pl-smi">outer</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-en">numFormat</span>(value) <span class="pl-k">+</span> (value <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span> word<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span> words<span class="pl-pds">&quot;</span></span>); </td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">					</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Hide the arc where the character hasn&#39;t said a thing</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.arc-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">		        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span>Find which characterData is the correct one based on location</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> loc <span class="pl-k">=</span> <span class="pl-smi">characterData</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-smi">outer</span>.<span class="pl-smi">outername</span> <span class="pl-k">===</span> <span class="pl-smi">s</span>.<span class="pl-smi">outername</span>; });</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">loc</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">0.1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">					</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Update the title to show the total word count of the character</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.texts<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>);	</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.name-title<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">text</span>(<span class="pl-smi">d</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.value-title<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">text</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> words <span class="pl-k">=</span> <span class="pl-smi">dataChar</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">s</span>) { <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-smi">key</span> <span class="pl-k">===</span> <span class="pl-smi">d</span>.<span class="pl-c1">name</span>; });</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-en">numFormat</span>(words[<span class="pl-c1">0</span>].<span class="pl-c1">value</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> words<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Show the character note</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.character-note<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">text</span>(characterNotes[<span class="pl-smi">d</span>.<span class="pl-c1">name</span>])</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">call</span>(wrap, <span class="pl-c1">2.25</span><span class="pl-k">*</span>pullOutSize);</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Hide ring text</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.ring-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, fadeOpacity);</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">		})</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">     	.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseout<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Put the string opacity back to normal</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">		    <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.string<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, defaultOpacity);</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Return the word count to what it was</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.outer-label-value<span class="pl-pds">&quot;</span></span>)	</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">s</span>,<span class="pl-smi">i</span>){ <span class="pl-k">return</span> <span class="pl-en">numFormat</span>(<span class="pl-smi">s</span>.<span class="pl-c1">value</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> words<span class="pl-pds">&quot;</span></span>; });</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Show all arcs again</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.arc-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">		      	.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">		        .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Hide the title</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.texts<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> //Hide the character note</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> d3.selectAll(&quot;.character-note&quot;)</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> 	.text(&quot;&quot;);</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>Show ring text</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.ring-wrapper<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">	  		</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">});<span class="pl-c"><span class="pl-c">//</span>d3.csv</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>/////////////////// Extra functions //////////////////////</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>//////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Sort the locations in a particula order</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">sortLocation</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> locationOrder <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>The Shire<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Bree<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Isengard<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Rivendell<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Misty Mountains<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Moria<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Lothlorien<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Parth Galen<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Emyn Muil<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Rohan<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Fangorn<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Gondor<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Mordor<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">return</span> <span class="pl-smi">locationOrder</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">a</span>.<span class="pl-c1">location</span>) <span class="pl-k">-</span> <span class="pl-smi">locationOrder</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">b</span>.<span class="pl-c1">location</span>);</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">}<span class="pl-c"><span class="pl-c">//</span>sortLocation</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Sort alphabetically</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">sortAlpha</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">	    <span class="pl-k">if</span>(a <span class="pl-k">&lt;</span> b) <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">	    <span class="pl-k">if</span>(a <span class="pl-k">&gt;</span> b) <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">	    <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">}<span class="pl-c"><span class="pl-c">//</span>sortAlpha</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Sort on the number of words</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">sortWords</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">	    <span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-smi">words</span> <span class="pl-k">&lt;</span> <span class="pl-smi">b</span>.<span class="pl-smi">words</span>) <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">	    <span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-smi">words</span> <span class="pl-k">&gt;</span> <span class="pl-smi">b</span>.<span class="pl-smi">words</span>) <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">	    <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">}<span class="pl-c"><span class="pl-c">//</span>sortWords</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*Taken from http://bl.ocks.org/mbostock/7555321</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line"><span class="pl-c">//Wraps SVG text*/</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">wrap</span>(<span class="pl-smi">text</span>, <span class="pl-smi">width</span>) {</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">text</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> text <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>),</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">		words <span class="pl-k">=</span> <span class="pl-smi">text</span>.<span class="pl-c1">text</span>().<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>).<span class="pl-c1">reverse</span>(),</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">		word,</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">		line <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">		lineNumber <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">		lineHeight <span class="pl-k">=</span> <span class="pl-c1">1.2</span>, <span class="pl-c"><span class="pl-c">//</span> ems</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">		y <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(<span class="pl-smi">text</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span>)),</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">		x <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(<span class="pl-smi">text</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>)),</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">		dy <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(<span class="pl-smi">text</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>dy<span class="pl-pds">&quot;</span></span>)),</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">		tspan <span class="pl-k">=</span> <span class="pl-smi">text</span>.<span class="pl-c1">text</span>(<span class="pl-c1">null</span>).<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>tspan<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>, x).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span>, y).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>dy<span class="pl-pds">&quot;</span></span>, dy <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>em<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">while</span> (word <span class="pl-k">=</span> <span class="pl-smi">words</span>.<span class="pl-c1">pop</span>()) {</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">	  <span class="pl-smi">line</span>.<span class="pl-c1">push</span>(word);</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">	  <span class="pl-smi">tspan</span>.<span class="pl-c1">text</span>(<span class="pl-smi">line</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">	  <span class="pl-k">if</span> (<span class="pl-smi">tspan</span>.<span class="pl-en">node</span>().<span class="pl-en">getComputedTextLength</span>() <span class="pl-k">&gt;</span> width) {</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">line</span>.<span class="pl-c1">pop</span>();</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">tspan</span>.<span class="pl-c1">text</span>(<span class="pl-smi">line</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">		line <span class="pl-k">=</span> [word];</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">		tspan <span class="pl-k">=</span> <span class="pl-smi">text</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>tspan<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>, x).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span>, y).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>dy<span class="pl-pds">&quot;</span></span>, <span class="pl-k">++</span>lineNumber <span class="pl-k">*</span> lineHeight <span class="pl-k">+</span> dy <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>em<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>(word);</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">	  }</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">}<span class="pl-c"><span class="pl-c">//</span>wrap</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>http://stackoverflow.com/questions/14446511/what-is-the-most-efficient-method-to-groupby-on-a-javascript-array-of-objects</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> dataGrouper <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">has</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">target</span>) {</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">any</span>(obj, <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">isEqual</span>(value, target);</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">keys</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>, <span class="pl-smi">names</span>) {</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">reduce</span>(data, <span class="pl-k">function</span>(<span class="pl-smi">memo</span>, <span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> key <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">pick</span>(item, names);</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">has</span>(memo, key)) {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">memo</span>.<span class="pl-c1">push</span>(key);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> memo;</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">        }, []);</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">group</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>, <span class="pl-smi">names</span>) {</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> stems <span class="pl-k">=</span> <span class="pl-en">keys</span>(data, names);</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">map</span>(stems, <span class="pl-k">function</span>(<span class="pl-smi">stem</span>) {</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">                key<span class="pl-k">:</span> stem,</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">                vals<span class="pl-k">:</span><span class="pl-smi">_</span>.<span class="pl-en">map</span>(<span class="pl-smi">_</span>.<span class="pl-en">where</span>(data, stem), <span class="pl-k">function</span>(<span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">omit</span>(item, names);</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">                })</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">group</span>.<span class="pl-en">register</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">converter</span>) {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> group[name] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>, <span class="pl-smi">names</span>) {</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">map</span>(<span class="pl-en">group</span>(data, names), converter);</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> group;</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">}());</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">dataGrouper</span>.<span class="pl-en">register</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>sum<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">extend</span>({}, <span class="pl-smi">item</span>.<span class="pl-smi">key</span>, {</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">		words<span class="pl-k">:</span> <span class="pl-smi">_</span>.<span class="pl-en">reduce</span>(<span class="pl-smi">item</span>.<span class="pl-smi">vals</span>, <span class="pl-k">function</span>(<span class="pl-smi">memo</span>, <span class="pl-smi">node</span>) {</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">        	<span class="pl-k">return</span> memo <span class="pl-k">+</span> <span class="pl-smi">node</span>.<span class="pl-smi">words</span>;</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">    	}, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.10016s from github-fe163-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha256-ikMY/+oJoM24IUt2zykmufagztMYoxe+1BnbGSFMaQ0=" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" integrity="sha256-bRCeda2EcbpBUIJybADDX7kpzquXUIJJKDXxHsqMB9k=" src="https://assets-cdn.github.com/assets/frameworks-6d109e75ad8471ba415082726c00c35fb929ceab975082492835f11eca8c07d9.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-wC5XS/AFJkeL8nkWRggFsWsLsKi9cy0rFOeeMdWkUig=" src="https://assets-cdn.github.com/assets/github-c02e574bf00526478bf27916460805b16b0bb0a8bd732d2b14e79e31d5a45228.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

