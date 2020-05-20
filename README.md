This project is just a demo how to use git	
// git init
// git add
// git commit
// git diff
// git log
// git show
// git restore
// git restore --staged
// git checkout chuyển đến thư mục master or feature/dog-class
// git branch để show các cái thư mục và biết mình đang ở đâu
// git checkout -b tạo 1 cái mới example feature/dog-class
// git branch -D feature/dog-class xóa đi cái thư mục feature này
// git merge để nhập 2 thư mục làm 1
// git reset --soft < to commit >để quay lại trạng thái trước commit (commit mới nhất)
// git mixed --soft < to commit> để quay lại trạng thái trước add
// git reset --hard < to commit >xóa commit 
// git revert < commit > (bất kỳ commit nào)
// .gitignore (chalk)
// git clone
// git pull 
// git pull request
// 1.git checkout -b< feature-branch>
// 2.git push origin < branch >
// 3.create a pull request on GitHub	
// 4.review code 
	4.1 review code online
	4.2 fetch branch into local to test offline
	4.3 approvethe pull request
// 5. merge to master
// Resolve conflicts
When will conflicts happen?
	1.Changing the same file +same line
	2.A deleted file X, B modified file X
Method 1:
	1.Using git rebase
	2.Resolve conflicts
	3.Push again with -f
Method 2:
	1.Merge updated master to feature branch
	2.Resolve conflict
	3.Commit and push