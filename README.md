<div dir="rtl">
  
# אוניברסיטת אריאל - פרויקטים מחקריים
**אפליקציה זו נועדה להקל על הנגשת המידע עבור תהליכי פיתוח הפרויקטים המחקריים באוניברסיטת אריאל.**

## דרישות
1. nvm - [מדריך](https://github.com/nvm-sh/nvm#installing-and-updating)
2. node.js
3. nginx (לפרודקשן)

## התקנה
1. התקינו את המאגר:
  `git clone https://github.com/ariel-research/ariel-research`
2. הריצו את הפקודה:
  `cd ariel-research`
3. התקינו את החבילות הרלוונטיות:
   `npm i`
4. על מנת להריץ את האתר:
   `npm start`

## פריסה
1. הריצו `npm run build`
2. העזרו במדריך ההתקנה של השרת על מנת להפעיל את nginx.
 - קובץ הקונפיגורציה של nginx לדוגמא:
   <div dir="ltr">
     
     ```
     server {
        listen 443 ssl; # managed by Certbot
        ssl_certificate /etc/letsencrypt/live/csariel.xyz/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/csariel.xyz/privkey.pem; # managed by Certbot
    
        server_name csariel.xyz www.csariel.xyz;
        root /home/admin/ariel-research/dist;
        index app.js;
    
        location / {
            proxy_pass http://localhost:2704; # Adjust the port if your Node.js app uses a different port
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
        location = /favicon.ico { access_log off; log_not_found off; }
    
    
    
    }
    server {
        listen 80;
        server_name csariel.xyz www.csariel.xyz;
    
        if ($host = www.csariel.xyz) {
            return 301 https://$host$request_uri;
        } # managed by Certbot
    
        if ($host = csariel.xyz) {
            return 301 https://$host$request_uri;
        } # managed by Certbot
    
        return 404; # managed by Certbot
     }
     ```

## סקירת האפליקציה
האפליקציה מבוססת Node.js ומרנדרת קבצי Markdown בצורה דינאמית.

## דפים
- [רשימת הפרויקטים](https://csariel.xyz) (דף הבית)
- [מדריך הפעלת שירות](https://csariel.xyz/how-to/service)

## שינוי ועדכון הדפים
על מנת לעדכן את השינויים באתר, יש צורך בעדכון המאגר על השרת:
1. התחברו למשתמש `admin`.
2. הכנסו לתקיית `ariel-research`.
3. משכו את השינויים באמצעות `git pull`.
4. ניתן לבדוק את השינויים על קבצי הmd בתקיית `src/content`.
5. אם מדובר בשינויים על קבצים שאינם מסוג md, הריצו `npm run build`
