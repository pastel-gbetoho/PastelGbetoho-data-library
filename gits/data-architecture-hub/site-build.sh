#!/bin/bash
# @author: Pastel Gbetoho
# @created date : 01-AUG-2023
#############################################################################


# Common variables #
#==============================================#

export THIS_PROCESS=$(basename ${0%.*})
export THIS_PATH=$PWD
export THIS_FOLDER="${PWD##*/}"
export LOG_FILE=${THIS_PROCESS}.log
export MEDIA_CFG=cfg/site-build-cfg-media.cnf
export HTML_CFG=cfg/site-build-cfg-html.cnf


# Functions #
#===========================================#

#---------------------------------------------------------------------------
#
# Function :    logLevelI
#
# Description : Write log level I message in the terminal
#
# Params :   	$1 = Message code : ERROR, WARN, INFO
#               $2 = Message description
#
#---------------------------------------------------------------------------
function logLevelI
{
	typeset MsgCode=$1
	typeset MsgDesc=$2
	typeset folderName=${THIS_FOLDER}
	typeset processName=${THIS_PROCESS}.sh
	typeset currentDate=$(date "+%Y/%m/%d")
	typeset currentHour=$(date "+%H:%M:%S")
	echo "$currentDate;$currentHour;$folderName;$processName;$MsgCode;$MsgDesc"
}

#---------------------------------------------------------------------------
#
# Function :    logLevelII
#
# Description : Write log level II message in the auto generated log file
#
# Params :   	$1 = Action code : INIT, CLEAN
#
#---------------------------------------------------------------------------
function logLevelII
{
	ActionCode=$1
	
	if [ $ActionCode = "INIT" ]; then
		rm -f $LOG_FILE
		touch $LOG_FILE
		ret=$?
		if [ $ret -ne 0 ]; then logLevelI "ERROR" "Cannot create log levelII file"; exit 2; fi
		logLevelI "INFO" "logLevelII file has been created : $LOG_FILE"
	fi
	
	if [ $ActionCode = "CLEAN" ]; then
		rm -f $LOG_FILE
		ret=$?
		if [ $ret -ne 0 ]; then logLevelI "ERROR" "Cannot delete log levelII file"; exit 2; fi
		logLevelI "INFO" "logLevelII file has been deleted : $LOG_FILE"
	fi	
}


#---------------------------------------------------------------------------
#
# Function :    mediaCopy
#
# Description : Copy media files from git repositories into the data architecture hub
#
#---------------------------------------------------------------------------
function mediaCopy
{
	if [ ! -f "$MEDIA_CFG" ]; then logLevelI "ERROR" "Config file does not exist : $MEDIA_CFG"; exit 2; fi
	
	# Loop thru the configuration file and copy the media files
	grep -v "^#" $MEDIA_CFG | while read RepoName SrcMediaFolder TgtMediaFolder
	do
		# Sync the repository before media copy
		cd $THIS_PATH/../$RepoName && git pull
		ret=$?
		if [ $ret -ne 0 ]; then logLevelI "ERROR" "Git pull failed : $RepoName"; exit 2; fi
		logLevelI "INFO" "Git pull successfully : $RepoName"
		
		# Copy and replace if exists instead of removing
		cd $THIS_PATH && cp -rT $THIS_PATH/../$RepoName/$SrcMediaFolder $THIS_PATH/$TgtMediaFolder >> ${LOG_FILE} 2>&1
		ret=$?
		if [ $ret -ne 0 ]; then logLevelI "ERROR" "Media copy failed : $RepoName/$SrcMediaFolder"; exit 2; fi
		logLevelI "INFO" "Media copy successfully : $RepoName/$SrcMediaFolder"
	done	
}


#---------------------------------------------------------------------------
#
# Function :    generateHtml
#
# Description : Generate html files from markdown
#
#---------------------------------------------------------------------------
function generateHtml
{
	if [ ! -f "$HTML_CFG" ]; then logLevelI "ERROR" "Config file does not exist : $HTML_CFG"; exit 2; fi
	
	# Loop thru the configuration file and copy the media files
	grep -v "^#" $HTML_CFG | while read Action RepoName MkdFile HtmlFile
	do
		logLevelI "INFO" "${RepoName}|Generate html file - ${HtmlFile} > from markdown - ${MkdFile}"
		
		# Set path for markdown file
		if [ $RepoName = "data-architecture-hub" ]; then
			MkdPath=$THIS_PATH
		else
			MkdPath=$THIS_PATH/../$RepoName
		fi
		
		# Generate html file 
		case ${Action} in
		"BuildIndex") pandoc ${MkdPath}/${MkdFile} --template pandoc/template/toc-sidebar.html -o docs/${HtmlFile} -fmarkdown-implicit_figures >> ${LOG_FILE} 2>&1
			ret=$?
			if [ $ret -ne 0 ]; then logLevelI "ERROR" "${RepoName}|Html file generation failed : $HtmlFile"; exit 2; fi
			logLevelI "INFO" "${RepoName}|Html file generation successfully : $HtmlFile"
			 ;;
		"BuildPage") pandoc ${MkdPath}/${MkdFile} --template pandoc/template/toc-sidebar.html --toc -o docs/${HtmlFile} -fmarkdown-implicit_figures
			ret=$?
			if [ $ret -ne 0 ]; then logLevelI "ERROR" "${RepoName}|Html file generation failed : $HtmlFile"; exit 2; fi
			logLevelI "INFO" "${RepoName}|Html file generation successfully : $HtmlFile"
			 ;;
		esac		
	done	
}


# Data architecture hub - generate documenation #
#===============================================#

logLevelII "INIT"
if [ $? -ne 0 ]; then exit 2; fi

#mediaCopy
#if [ $? -ne 0 ]; then exit 2; fi

generateHtml
if [ $? -ne 0 ]; then exit 2; fi

logLevelII "CLEAN" 
if [ $? -ne 0 ]; then exit 2; fi

exit 0