function solve(array) {
    let users = [];
    let articles = {};
    let comments = {};

    for (const line of array) {
        if (line.includes('user')) {
            let username = line.split(' ')[1];
            if (!users.includes(username)) {
                users.push(username);
            }
        } else if (line.includes('article')) {
            let articleName = line.split(' ')[1];
            if (!articles.hasOwnProperty(articleName)) {
                articles[articleName] = [];
            }
        } else {
            let [username, articleInfo, commentInfo] = line.split(' posts on ');
            let [articleName, comment] = articleInfo.split(': ');
            let [commentTitle, commentContent] = comment.split(', ');

            if (users.includes(username) && articles.hasOwnProperty(articleName)) {
                if (!comments.hasOwnProperty(articleName)) {
                    comments[articleName] = [];
                }
                comments[articleName].push({
                    username: username,
                    title: commentTitle,
                    content: commentContent
                });
            }
        }
    }

    let sortedArticles = Object.entries(articles).sort((a, b) => comments[b[0]].length - comments[a[0]].length);

    for (const [article, _] of sortedArticles) {
        console.log(`Comments on ${article}`);
        comments[article].sort((a, b) => a.username.localeCompare(b.username))
            .forEach(comment => console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`));
    }
}


solve(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])
// solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])