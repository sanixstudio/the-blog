import React from 'react'
import {
	PostCardBox,
	PostCardHeadline,
	PostCardImage,
	PostCardTag,
	PostCardTimestamp,
	PostCardTopic,
	PostCardTagline,
	PostCardLink
} from './_PostCard.styles'

export default function PostCard ({ children, ...props }) {
	return <PostCardBox { ...props }>{ children }</PostCardBox>
}

PostCard.Headline = function PCHeadline ({ children, ...props }) {
	return <PostCardHeadline { ...props }>{ children }</PostCardHeadline>
}

PostCard.Tags = function PCTags ({ children, ...props }) {
	return <PostCardTag { ...props }>{ children }</PostCardTag>
}

PostCard.Topic = function PCTopic ({ children, ...props }) {
	return <PostCardTopic { ...props }>{ children }</PostCardTopic>
}

PostCard.Image = function PCImage ({ children, ...props }) {
	return <PostCardImage { ...props }>{ children }</PostCardImage>
}

PostCard.Timestamp = function PCTimestamp ({ children, ...props }) {
	return <PostCardTimestamp { ...props }>{ children }</PostCardTimestamp>
}

PostCard.Tagline = function PCTagline ({ children, ...props }) {
	return <PostCardTimestamp { ...props }>{ children }</PostCardTimestamp>
}

PostCard.Link = function PCTagline ({ children, ...props }) {
	return <PostCardLink { ...props }>{ children }</PostCardLink>
}
