FROM ubuntu:18.04

#installing java
RUN apt-get update &&\
	apt-get upgrade -y &&\
	apt-get install -y software-properties-common &&\
	add-apt-repository ppa:openjdk-r/ppa &&\
	apt-get update &&\
	apt-get -y install openjdk-8-jdk

# setting up environment variables
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64
ENV PATH $JAVA_HOME/bin:$PATH

#vim, git, unzip, wget, curl
RUN apt update && apt install -y \
	unzip \
	vim \
	git \
	wget \
	curl

# Add sbt repo to sources list
RUN echo "deb http://dl.bintray.com/sbt/debian /" | tee -a /etc/apt/sources.list.d/sbt.list

# Install Scala
ENV SCALA_VERSION 2.12.8
ENV SCALA_DEB http://www.scala-lang.org/files/archive/scala-$SCALA_VERSION.deb

RUN \
    wget --quiet --output-document=scala.deb $SCALA_DEB && \
    dpkg -i scala.deb && \
    rm -f *.deb

# Install Scala Build Tool sbt

RUN echo "deb https://repo.scala-sbt.org/scalasbt/debian all main" | tee /etc/apt/sources.list.d/sbt.list
RUN echo "deb https://repo.scala-sbt.org/scalasbt/debian /" | tee /etc/apt/sources.list.d/sbt_old.list
RUN curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | apt-key add
RUN apt-get update
RUN apt-get install sbt

# npm
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash - &&\
	apt-get install -y nodejs

# exposing ports for React and Play 
EXPOSE 3000
EXPOSE 9000

# creating a user
RUN useradd -ms /bin/bash yvyshniakov
RUN adduser yvyshniakov sudo

# creating a working directory 
USER yvyshniakov
WORKDIR /home/yvyshniakov/
RUN mkdir /home/yvyshniakov/workshop

# creating a volume that will be exposed to the host
VOLUME [ "/home/yvyshniakov/workshop" ]

# taking packages from sbt so it won't need to happen after the first request, 
# for example to get the version number
RUN sbt -V
