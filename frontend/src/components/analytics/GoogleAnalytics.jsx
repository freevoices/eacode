import Script from 'next/script'
 
function GoogleAnalytics() {
  return (
    <head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9T8LYHBX60" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-9T8LYHBX60');
        `}
      </Script>
    </head>
  )
}
 
export default GoogleAnalytics