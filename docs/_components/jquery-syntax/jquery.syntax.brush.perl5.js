// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
Syntax.register("perl5",function(a){a.push(["this","true","false"],{klass:"constant"});a.push("bless caller continue die do dump else elsif eval exit for foreach goto if import last local my next no our package redo ref require return sub tie tied unless untie until use wantarray while".split(" "),{klass:"keyword"});a.push("-> ++ -- ** ! ~ \\ + - =~ !~ * / % x + - . << >> < > <= >= lt gt le ge == != <=> eq ne cmp ~~ & | ^ && || // .. ... ?: = , => not and or xor".split(" "),{klass:"operator"});a.push("abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr chroot close closedir connect cos crypt defined delete each endgrent endhostent endnetent endprotoent endpwent endservent eof exec exists exp fcntl fileno flock fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getppid getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt glob gmtime grep hex index int ioctl join keys kill lc lcfirst length link listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd oct open opendir ord pack pipe pop pos print printf prototype push quotemeta rand read readdir readline readlink readpipe recv rename reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat study substr symlink syscall sysopen sysread sysseek system syswrite tell telldir time times tr truncate uc ucfirst umask undef unlink unpack unshift utime values vec wait waitpid warn write".split(" "),
{klass:"function"});a.push(Syntax.lib.perlStyleRegularExpression);a.push(Syntax.lib.perlStyleComment);a.push(Syntax.lib.webLink);a.push({pattern:/(\$|@|%)\w+/gi,klass:"variable"});a.push({pattern:/__END__[\s\S]*/gm,klass:"comment"});a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.hexNumber);a.push(Syntax.lib.cStyleFunction)});